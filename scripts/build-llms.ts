import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs'
import { resolve } from 'path'

const ROOT = process.cwd()
const PUBLIC = resolve(ROOT, 'public')
const LLMS_DIR = resolve(PUBLIC, 'llms')

// ---------------------------------------------------------------------------
// MDX → Markdown conversion
// ---------------------------------------------------------------------------

function readFile(path: string): string {
  return readFileSync(resolve(ROOT, path), 'utf-8')
}

function mdxToMarkdown(content: string): string {
  let result = content

  // First, extract fenced code blocks and replace with placeholders
  const codeBlocks: string[] = []
  result = result.replace(/```[\s\S]*?```/g, (block) => {
    codeBlocks.push(block)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // Remove import lines
  result = result.replace(/^import\s+.*$/gm, '')

  // Remove `export const metadata = { ... }` (multi-line)
  result = result.replace(
    /^export\s+const\s+metadata\s*=\s*\{[\s\S]*?\}\s*$/m,
    ''
  )

  // Remove <DocPage> / </DocPage>
  result = result.replace(/<\/?DocPage>/g, '')

  // Transform <MapPage title="T" description="D" registryName="R"> → heading + install
  result = result.replace(
    /<MapPage\s+title="([^"]+)"\s+description="([^"]+)"\s+registryName="([^"]+)"\s*>/,
    (_, title, description, registryName) =>
      `# ${title}\n\n${description}\n\n## Installation\n\n\`\`\`bash\nnpx shadcn@latest add https://shadcnmaps.com/r/${registryName}.json\n\`\`\``
  )
  result = result.replace(/<\/MapPage>/g, '')

  // Transform <ApiTable data={[...]} /> → markdown table
  result = result.replace(
    /<ApiTable\s+data=\{(\[[\s\S]*?\])\}\s*\/>/g,
    (_, arrayStr: string) => {
      try {
        const rows: Array<{
          prop: string
          type: string
          default: string
          description: string
        }> = []
        const rowRegex =
          /\{\s*prop:\s*'([^']*)',\s*type:\s*'([^']*)',\s*default:\s*'([^']*)',\s*description:\s*'([^']*)'\s*\}/g
        let m: RegExpExecArray | null
        while ((m = rowRegex.exec(arrayStr)) !== null) {
          rows.push({
            prop: m[1],
            type: m[2],
            default: m[3],
            description: m[4],
          })
        }
        if (rows.length === 0) return ''
        const header = '| Prop | Type | Default | Description |'
        const sep = '|------|------|---------|-------------|'
        const body = rows
          .map(
            (r) =>
              `| \`${r.prop}\` | \`${r.type}\` | ${r.default === '—' ? '—' : `\`${r.default}\``} | ${r.description} |`
          )
          .join('\n')
        return `${header}\n${sep}\n${body}`
      } catch {
        return ''
      }
    }
  )

  // Transform <ExampleLoader filePath="F">...</ExampleLoader> → fenced code block
  result = result.replace(
    /<ExampleLoader\s+filePath=['"]([^'"]+)['"]\s*>\s*[\s\S]*?<\/ExampleLoader>/g,
    (_, filePath) => {
      try {
        let code = readFile(filePath)
        code = code.replace(
          /@\/registry\/shadcnmaps\//g,
          '@/components/shadcnmaps/'
        )
        return '```tsx\n' + code.trim() + '\n```'
      } catch {
        return ''
      }
    }
  )

  // Remove standalone JSX tags like <ComponentName /> (but not code blocks)
  result = result.replace(/^<[A-Z]\w+\s*\/>\s*$/gm, '')

  // Restore code blocks
  result = result.replace(
    /__CODE_BLOCK_(\d+)__/g,
    (_, idx) => codeBlocks[Number(idx)]
  )

  // Clean up excessive blank lines
  result = result.replace(/\n{3,}/g, '\n\n')

  return result.trim()
}

// ---------------------------------------------------------------------------
// Gather sources
// ---------------------------------------------------------------------------

function loadMdx(path: string): string {
  return mdxToMarkdown(readFile(path))
}

// ---------------------------------------------------------------------------
// Build per-map content
// ---------------------------------------------------------------------------

interface PageInfo {
  slug: string
  title: string
  description: string
  content: string
}

function buildMapInfo(slug: string): PageInfo {
  const mdxPath = `app/(docs)/maps/${slug}/page.mdx`
  const raw = readFile(mdxPath)

  // Extract MapPage props
  const titleMatch = raw.match(/title="([^"]+)"/)
  const descMatch = raw.match(/description="([^"]+)"/)

  const title = titleMatch?.[1] ?? slug
  const description = descMatch?.[1] ?? ''

  // Convert the MDX
  let content = mdxToMarkdown(raw)

  // Append props and types from api-reference
  const apiContent = loadMdx('app/(docs)/overview/api-reference/page.mdx')
  const propsMatch = apiContent.match(/## Map Props[\s\S]*/)
  if (propsMatch) {
    content += '\n\n' + propsMatch[0]
  }

  // Append CSS variables from theming
  const themingContent = loadMdx('app/(docs)/overview/theming/page.mdx')
  const cssVarsMatch = themingContent.match(
    /## CSS variables[\s\S]*?(?=\n## Override globally|$)/
  )
  if (cssVarsMatch) {
    content += '\n\n' + cssVarsMatch[0].trim()
  }

  return { slug, title, description, content }
}

// ---------------------------------------------------------------------------
// Build per-example content
// ---------------------------------------------------------------------------

function buildExampleInfo(slug: string): PageInfo {
  const mdxPath = `app/(docs)/examples/${slug}/page.mdx`
  const raw = readFile(mdxPath)

  const content = mdxToMarkdown(raw)

  // Extract title and description from metadata export
  const titleMatch = raw.match(/title:\s*'([^']*)'/)
  const descMatch = raw.match(/description:\s*'([^']*)'/)

  return {
    slug,
    title: titleMatch?.[1] ?? slug,
    description: descMatch?.[1] ?? '',
    content,
  }
}

function findExampleSlugs(): string[] {
  const examplesDir = resolve(ROOT, 'app/(docs)/examples')
  if (!existsSync(examplesDir)) return []
  return readdirSync(examplesDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => existsSync(resolve(examplesDir, name, 'page.mdx')))
    .toSorted()
}

// ---------------------------------------------------------------------------
// Build output files
// ---------------------------------------------------------------------------

function findMapSlugs(): string[] {
  const mapsDir = resolve(ROOT, 'app/(docs)/maps')
  if (!existsSync(mapsDir)) return []
  return readdirSync(mapsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => existsSync(resolve(mapsDir, name, 'page.mdx')))
    .toSorted()
}

function buildLlmsTxt(mapInfos: PageInfo[], exampleInfos: PageInfo[]): string {
  const mapEntries = mapInfos
    .map(
      (m) =>
        `- [${m.title}](https://shadcnmaps.com/llms/${m.slug}.md): ${m.description}`
    )
    .join('\n')

  const exampleEntries = exampleInfos
    .map(
      (e) =>
        `- [${e.title}](https://shadcnmaps.com/llms/${e.slug}.md): ${e.description}`
    )
    .join('\n')

  return `# shadcnmaps

> Interactive SVG map components for React. Install via the shadcn CLI — no npm package, no version lock.

shadcnmaps provides interactive SVG map components for React built with Tailwind CSS. Components are installed directly into your project via the shadcn CLI and are fully customizable.

Key features:
- Zero dependencies — pure React SVG, no d3
- Tailwind CSS theming via CSS variables
- Fully accessible — ARIA attributes, keyboard navigation, screen reader support
- TypeScript-first with full type safety

## For AI Assistants

When helping users with shadcnmaps:
- Components install to \`components/shadcnmaps/\` in the user's project
- Import from \`@/components/shadcnmaps/maps/<map-name>\` (not from an npm package)
- Colors use CSS variables: \`fill-map-region\`, \`fill-map-region-selected\`, etc.
- All map components are \`'use client'\` — they require a client boundary

## Documentation

- [Getting Started](https://shadcnmaps.com/overview/getting-started): Installation, prerequisites, basic usage
- [API Reference](https://shadcnmaps.com/overview/api-reference): Props and types shared by all map components
- [Theming](https://shadcnmaps.com/overview/theming): CSS variables, dark mode, per-region colors

## Maps

${mapEntries}

## Examples

${exampleEntries}
`
}

function buildLlmsFullTxt(
  mapInfos: PageInfo[],
  exampleInfos: PageInfo[]
): string {
  const gettingStarted = loadMdx('app/(docs)/overview/getting-started/page.mdx')
  const apiReference = loadMdx('app/(docs)/overview/api-reference/page.mdx')
  const theming = loadMdx('app/(docs)/overview/theming/page.mdx')

  const mapsSection = mapInfos
    .map(
      (m) =>
        `- [${m.title}](https://shadcnmaps.com/llms/${m.slug}.md): ${m.description}`
    )
    .join('\n')

  const examplesSection = exampleInfos
    .map(
      (e) =>
        `- [${e.title}](https://shadcnmaps.com/llms/${e.slug}.md): ${e.description}`
    )
    .join('\n')

  return `# shadcnmaps — Full Documentation

> Interactive SVG map components for React. No dependencies, pure Tailwind.

---

${gettingStarted}

---

${apiReference}

---

${theming}

---

## Maps

${mapsSection}

## Examples

${examplesSection}
`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const mapSlugs = findMapSlugs()
  const mapInfos = mapSlugs.map(buildMapInfo)

  const exampleSlugs = findExampleSlugs()
  const exampleInfos = exampleSlugs.map(buildExampleInfo)

  // Ensure output directory exists
  if (!existsSync(LLMS_DIR)) {
    mkdirSync(LLMS_DIR, { recursive: true })
  }

  // Write llms.txt
  const llmsTxt = buildLlmsTxt(mapInfos, exampleInfos)
  writeFileSync(resolve(PUBLIC, 'llms.txt'), llmsTxt)

  // Write llms-full.txt
  const llmsFullTxt = buildLlmsFullTxt(mapInfos, exampleInfos)
  writeFileSync(resolve(PUBLIC, 'llms-full.txt'), llmsFullTxt)

  // Write per-map files
  for (const info of mapInfos) {
    writeFileSync(resolve(LLMS_DIR, `${info.slug}.md`), info.content + '\n')
  }

  // Write per-example files
  for (const info of exampleInfos) {
    writeFileSync(resolve(LLMS_DIR, `${info.slug}.md`), info.content + '\n')
  }

  const total = mapInfos.length + exampleInfos.length
  console.log(
    `✓ Built LLM docs: llms.txt, llms-full.txt, ${total} per-page file(s) (${mapInfos.length} maps, ${exampleInfos.length} examples)`
  )
}

main()
