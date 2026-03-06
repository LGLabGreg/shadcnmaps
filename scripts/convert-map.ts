import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const ROOT = resolve(__dirname, '..')
const JSMAPS_DIR = resolve(ROOT, '..', 'JSMaps', 'src', 'maps')

// ---------------------------------------------------------------------------
// Naming utilities
// ---------------------------------------------------------------------------

const TITLE_OVERRIDES: Record<string, string> = {
  usa: 'United States',
  uk: 'United Kingdom',
  uae: 'United Arab Emirates',
  usaCanada: 'USA & Canada',
  usaTerritories: 'USA Territories',
  northeastUSA: 'Northeast USA',
  coteIvoire: "Côte d'Ivoire",
  czechRepublic: 'Czech Republic',
  democraticRepublicCongo: 'Democratic Republic of the Congo',
  dominicanRepublic: 'Dominican Republic',
  elSalvador: 'El Salvador',
  europeanUnion: 'European Union',
  franceDepartements: 'France Départements',
  LondonBoroughs: 'London Boroughs',
  middleEast: 'Middle East',
  newYorkCityBoroughs: 'New York City Boroughs',
  newZealand: 'New Zealand',
  northAfrica: 'North Africa',
  northAmerica: 'North America',
  centralAmerica: 'Central America',
  centralAfrica: 'Central Africa',
  southAmerica: 'South America',
  southAfrica: 'South Africa',
  southKorea: 'South Korea',
  sriLanka: 'Sri Lanka',
  palestineIsrael: 'Palestine & Israel',
  puertoRico: 'Puerto Rico',
  saudiArabia: 'Saudi Arabia',
  trinidadAndTobago: 'Trinidad and Tobago',
  worldJammuKashmir: 'World (Jammu & Kashmir)',
  slovekia: 'Slovakia',
  newHampshire: 'New Hampshire',
  newJersey: 'New Jersey',
  newMexico: 'New Mexico',
  newYork: 'New York',
  northCarolina: 'North Carolina',
  northDakota: 'North Dakota',
  southCarolina: 'South Carolina',
  southDakota: 'South Dakota',
  westVirginia: 'West Virginia',
  rhodeIsland: 'Rhode Island',
  costaRica: 'Costa Rica',
}

/** camelCase → kebab-case: "newYork" → "new-york" */
function camelToKebab(str: string): string {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}

/** camelCase → Title Case: "newYork" → "New York" */
function camelToTitle(str: string): string {
  if (TITLE_OVERRIDES[str]) return TITLE_OVERRIDES[str]
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/^./, (c) => c.toUpperCase())
}

/** "france" → "france-map" */
function toSlug(mapId: string): string {
  return `${camelToKebab(mapId)}-map`
}

/** "france" → "franceMapData" */
function toDataExport(mapId: string): string {
  return `${mapId}MapData`
}

/** "france" → "FranceMap" */
function toComponentName(mapId: string): string {
  const pascal = mapId.charAt(0).toUpperCase() + mapId.slice(1)
  return `${pascal}Map`
}

/** "france" → "FranceMapProps" */
function toPropsType(mapId: string): string {
  return `${toComponentName(mapId)}Props`
}

/** "france" → "France Map" */
function toTitle(mapId: string): string {
  const name = camelToTitle(mapId)
  return `${name} Map`
}

/** Build a short description from the map data */
function buildDescription(mapId: string, regionCount: number): string {
  const name = camelToTitle(mapId)
  return `Interactive SVG map of ${name} with ${regionCount} regions. Supports click, hover, keyboard navigation, tooltips, and custom markers.`
}

/** Build a short registry description */
function buildRegistryDescription(mapId: string, regionCount: number): string {
  const name = camelToTitle(mapId)
  return `Interactive ${name} map with ${regionCount} regions. Supports click, hover, selection, tooltips, and custom markers.`
}

/** Build a short data description */
function buildDataDescription(mapId: string, regionCount: number): string {
  const name = camelToTitle(mapId)
  return `SVG path data for ${name} with ${regionCount} regions.`
}

// ---------------------------------------------------------------------------
// JSMaps parser
// ---------------------------------------------------------------------------

interface JSMapsPath {
  enable: boolean
  name: string
  abbreviation: string
  textX: number
  textY: number
  path: string
}

interface JSMapsConfig {
  mapWidth: number
  mapHeight: number
}

interface JSMapsData {
  config: JSMapsConfig
  paths: JSMapsPath[]
}

function parseJSMapsFile(filePath: string): JSMapsData {
  const raw = readFileSync(filePath, 'utf-8')

  // Extract the object literal after `window.JSMaps.maps.xxx = `
  const assignIdx = raw.indexOf('= {')
  if (assignIdx === -1) {
    throw new Error(`Could not find assignment in ${filePath}`)
  }

  let jsonStr = raw.slice(assignIdx + 2).trim()

  // Remove trailing semicolons/whitespace
  jsonStr = jsonStr.replace(/;\s*$/, '')

  // Fix trailing commas before closing brackets/braces (common in JS but invalid JSON)
  jsonStr = jsonStr.replace(/,(\s*[}\]])/g, '$1')

  // Replace single-quoted keys with double-quoted keys (e.g., 'textAreaWidth': → "textAreaWidth":)
  // Only match keys at the start of a line (after whitespace), not inside string values
  jsonStr = jsonStr.replace(/^(\s*)'([a-zA-Z]+)'\s*:/gm, '$1"$2":')

  // Fix bare decimals like .7 → 0.7 (valid JS but invalid JSON)
  jsonStr = jsonStr.replace(/:\s*\.(\d)/g, ': 0.$1')

  try {
    return JSON.parse(jsonStr) as JSMapsData
  } catch (e) {
    throw new Error(
      `Failed to parse JSON from ${filePath}: ${(e as Error).message}`,
      { cause: e }
    )
  }
}

// ---------------------------------------------------------------------------
// Slug deduplication for region IDs
// ---------------------------------------------------------------------------

function slugifyName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function buildRegionId(path: JSMapsPath, seenIds: Set<string>): string {
  let id = path.abbreviation?.trim() || slugifyName(path.name)
  if (!id) id = slugifyName(path.name)
  // Deduplicate
  const base = id
  let counter = 2
  while (seenIds.has(id)) {
    id = `${base}-${counter}`
    counter++
  }
  seenIds.add(id)
  return id
}

// ---------------------------------------------------------------------------
// File generators
// ---------------------------------------------------------------------------

function generateMapData(mapId: string, data: JSMapsData): string {
  const dataExport = toDataExport(mapId)
  const viewBox = `0 0 ${data.config.mapWidth} ${data.config.mapHeight}`

  const seenIds = new Set<string>()
  const regions = data.paths.map((p) => {
    const id = buildRegionId(p, seenIds)
    const abbr = p.abbreviation?.trim() || id
    const parts: string[] = [
      `      id: '${id}'`,
      `      name: '${p.name.replace(/'/g, "\\'")}'`,
      `      abbreviation: '${abbr.replace(/'/g, "\\'")}'`,
    ]
    if (p.textX) parts.push(`      labelX: ${p.textX}`)
    if (p.textY) parts.push(`      labelY: ${p.textY}`)
    parts.push(`      path: '${p.path.replace(/'/g, "\\'")}'`)
    return `    {\n${parts.join(',\n')},\n    }`
  })

  const name = camelToTitle(mapId)

  return `import type { MapData } from '@/registry/shadcnmaps/types'

export const ${dataExport} = {
  id: '${camelToKebab(mapId)}',
  name: '${name.replace(/'/g, "\\'")}',
  viewBox: '${viewBox}',
  regions: [
${regions.join(',\n')},
  ],
} as const satisfies MapData
`
}

function generateMapComponent(mapId: string): string {
  const dataExport = toDataExport(mapId)
  const componentName = toComponentName(mapId)
  const propsType = toPropsType(mapId)
  const kebab = camelToKebab(mapId)

  return `'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { ${dataExport} } from '@/registry/shadcnmaps/map-data/${kebab}'

export type RegionId = (typeof ${dataExport})['regions'][number]['id']

export interface ${propsType} extends Omit<MapProps, 'data'> {}

export function ${componentName}(props: ${propsType}) {
  return <Map data={${dataExport}} {...props} />
}
`
}

function generatePageMdx(mapId: string, regionCount: number): string {
  const slug = toSlug(mapId)
  const title = toTitle(mapId)
  const description = buildDescription(mapId, regionCount)

  return `import { MapPage } from '@/components/docs/map-page'
import { ExampleLoader } from '@/components/docs/example-loader'

import SimpleExample from './map'

export const metadata = {
  title: '${title}',
  description: '${description}',
}

<MapPage
  title="${title}"
  description="${description}"
  registryName="${slug}"
>

<ExampleLoader
  filePath='app/(docs)/maps/${slug}/map.tsx'
>
  <SimpleExample />
</ExampleLoader>

</MapPage>
`
}

function generateMapExample(mapId: string): string {
  const slug = toSlug(mapId)
  const componentName = toComponentName(mapId)

  return `'use client'

import { ${componentName} } from '@/registry/shadcnmaps/maps/${slug}'

export default function SimpleExample() {
  return <${componentName} />
}
`
}

// ---------------------------------------------------------------------------
// Registry updaters
// ---------------------------------------------------------------------------

function updateMapsRegistry(
  entries: Array<{ mapId: string; regionCount: number }>
): void {
  const filePath = resolve(ROOT, 'registry/shadcnmaps/maps/registry.ts')
  let content = readFileSync(filePath, 'utf-8')

  // Check if import for registryUrl exists, if not add it
  if (!content.includes('import { registryUrl }')) {
    content = `import { registryUrl } from '@/lib/config'\n\n${content}`
  }

  for (const { mapId, regionCount } of entries) {
    const slug = toSlug(mapId)
    const kebab = camelToKebab(mapId)
    const title = toTitle(mapId)
    const description = buildRegistryDescription(mapId, regionCount)

    if (content.includes(`name: '${slug}'`)) continue

    const entry = `  {
    name: '${slug}',
    type: 'registry:component',
    title: '${title}',
    description:
      '${description}',
    registryDependencies: [registryUrl('map'), registryUrl('${kebab}-map-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/${slug}.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/${slug}.tsx',
      },
    ],
  },`

    // Insert before the closing `]`
    const closingIdx = content.lastIndexOf(']')
    content =
      content.slice(0, closingIdx) + entry + '\n' + content.slice(closingIdx)
  }

  writeFileSync(filePath, content)
}

function updateMapDataRegistry(
  entries: Array<{ mapId: string; regionCount: number }>
): void {
  const filePath = resolve(ROOT, 'registry/shadcnmaps/map-data/registry.ts')
  let content = readFileSync(filePath, 'utf-8')

  for (const { mapId, regionCount } of entries) {
    const kebab = camelToKebab(mapId)
    const title = toTitle(mapId)
    const dataName = `${kebab}-map-data`
    const description = buildDataDescription(mapId, regionCount)

    if (content.includes(`name: '${dataName}'`)) continue

    const entry = `  {
    name: '${dataName}',
    type: 'registry:file',
    title: '${title} Data',
    description: '${description}',
    files: [
      {
        path: 'registry/shadcnmaps/map-data/${kebab}.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/${kebab}.ts',
      },
    ],
  },`

    const closingIdx = content.lastIndexOf(']')
    content =
      content.slice(0, closingIdx) + entry + '\n' + content.slice(closingIdx)
  }

  writeFileSync(filePath, content)
}

function updateNavigation(entries: Array<{ mapId: string }>): void {
  const filePath = resolve(ROOT, 'lib/navigation.ts')
  let content = readFileSync(filePath, 'utf-8')

  // Find the Maps section items array
  const mapsMatch = content.match(
    /title:\s*'Maps',\s*\n\s*items:\s*\[([\s\S]*?)\]/
  )
  if (!mapsMatch) {
    throw new Error('Could not find Maps section in navigation.ts')
  }

  const existingItems = mapsMatch[1]

  // Collect new items to add
  const newItems: Array<{ title: string; href: string }> = []
  for (const { mapId } of entries) {
    const slug = toSlug(mapId)
    const title = toTitle(mapId)
    if (
      existingItems.includes(`'${slug}'`) ||
      existingItems.includes(`"${slug}"`)
    )
      continue
    newItems.push({ title, href: `/maps/${slug}` })
  }

  if (newItems.length === 0) return

  // Parse existing items into array for sorting
  const itemRegex = /\{\s*title:\s*'([^']+)',\s*href:\s*'([^']+)'\s*\}/g
  const allItems: Array<{ title: string; href: string }> = []
  let match: RegExpExecArray | null
  while ((match = itemRegex.exec(existingItems)) !== null) {
    allItems.push({ title: match[1], href: match[2] })
  }

  allItems.push(...newItems)
  allItems.sort((a, b) => a.title.localeCompare(b.title))

  const itemsStr = allItems
    .map((item) => `      { title: '${item.title}', href: '${item.href}' }`)
    .join(',\n')

  const newMapsSection = `title: 'Maps',\n    items: [\n${itemsStr},\n    ]`
  content = content.replace(
    /title:\s*'Maps',\s*\n\s*items:\s*\[[\s\S]*?\]/,
    newMapsSection
  )

  writeFileSync(filePath, content)
}

function updateTracking(convertedMapIds: string[]): void {
  const filePath = resolve(ROOT, 'docs/MAP-TRACKING.md')
  let content = readFileSync(filePath, 'utf-8')

  for (const mapId of convertedMapIds) {
    content = content.replace(`- [ ] ${mapId}`, `- [x] ${mapId}`)
  }

  // Update summary counts
  const convertedCount = (content.match(/- \[x\]/g) || []).length
  const totalCount = (content.match(/- \[.\]/g) || []).length
  const remainingCount = totalCount - convertedCount

  content = content.replace(
    /- \*\*Converted:\*\* \d+/,
    `- **Converted:** ${convertedCount}`
  )
  content = content.replace(
    /- \*\*Remaining:\*\* \d+/,
    `- **Remaining:** ${remainingCount}`
  )

  writeFileSync(filePath, content)
}

// ---------------------------------------------------------------------------
// Main conversion
// ---------------------------------------------------------------------------

function findRemainingMapIds(): string[] {
  const trackingPath = resolve(ROOT, 'docs/MAP-TRACKING.md')
  const content = readFileSync(trackingPath, 'utf-8')
  const remaining: string[] = []
  const regex = /- \[ \] (\S+)/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(content)) !== null) {
    remaining.push(match[1])
  }
  return remaining
}

function convertMap(
  mapId: string,
  dryRun: boolean
): { mapId: string; regionCount: number } | null {
  // Find the source file (handle case-insensitive matching)
  let sourceFile = resolve(JSMAPS_DIR, `${mapId}.js`)
  if (!existsSync(sourceFile)) {
    // Try case-insensitive search
    const allFiles = readdirSync(JSMAPS_DIR)
    const match = allFiles.find(
      (f) => f.toLowerCase() === `${mapId.toLowerCase()}.js`
    )
    if (match) {
      sourceFile = resolve(JSMAPS_DIR, match)
    } else {
      console.error(`  ✗ Source file not found: ${mapId}.js`)
      return null
    }
  }

  const slug = toSlug(mapId)
  const kebab = camelToKebab(mapId)

  // Check if already converted
  const dataFile = resolve(ROOT, `registry/shadcnmaps/map-data/${kebab}.ts`)
  if (existsSync(dataFile)) {
    console.warn(`  ⚠ Already converted: ${mapId} (skipping)`)
    return null
  }

  // Parse source
  const data = parseJSMapsFile(sourceFile)
  const regionCount = data.paths.length

  if (dryRun) {
    console.log(`  [dry-run] Would create:`)
    console.log(
      `    registry/shadcnmaps/map-data/${kebab}.ts (${regionCount} regions)`
    )
    console.log(`    registry/shadcnmaps/maps/${slug}.tsx`)
    console.log(`    app/(docs)/maps/${slug}/page.mdx`)
    console.log(`    app/(docs)/maps/${slug}/map.tsx`)
    return { mapId, regionCount }
  }

  // Generate map data file
  const mapDataContent = generateMapData(mapId, data)
  writeFileSync(dataFile, mapDataContent)

  // Generate map component
  const componentFile = resolve(ROOT, `registry/shadcnmaps/maps/${slug}.tsx`)
  writeFileSync(componentFile, generateMapComponent(mapId))

  // Generate docs page
  const docsDir = resolve(ROOT, `app/(docs)/maps/${slug}`)
  mkdirSync(docsDir, { recursive: true })
  writeFileSync(
    resolve(docsDir, 'page.mdx'),
    generatePageMdx(mapId, regionCount)
  )
  writeFileSync(resolve(docsDir, 'map.tsx'), generateMapExample(mapId))

  console.log(`  ✓ ${mapId} → ${slug} (${regionCount} regions)`)
  return { mapId, regionCount }
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2)

  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Usage: pnpm tsx scripts/convert-map.ts [options] <mapId...>

Options:
  --all       Convert all remaining maps
  --dry-run   Preview without writing files
  --help      Show this help

Example usage:
  pnpm tsx scripts/convert-map.ts france
  pnpm tsx scripts/convert-map.ts france germany italy
  pnpm tsx scripts/convert-map.ts --dry-run france
  pnpm tsx scripts/convert-map.ts --all --dry-run

After converting maps:
  pnpm registry:build
`)
    process.exit(0)
  }

  const dryRun = args.includes('--dry-run')
  const convertAll = args.includes('--all')

  const mapIds = convertAll
    ? findRemainingMapIds()
    : args.filter((a) => !a.startsWith('--'))

  if (mapIds.length === 0) {
    console.log('No maps to convert.')
    process.exit(0)
  }

  console.log(
    `\n${dryRun ? '[DRY RUN] ' : ''}Converting ${mapIds.length} map(s)...\n`
  )

  const converted: Array<{ mapId: string; regionCount: number }> = []

  for (const mapId of mapIds) {
    const result = convertMap(mapId, dryRun)
    if (result) converted.push(result)
  }

  if (converted.length === 0) {
    console.log('\nNo maps were converted.')
    process.exit(0)
  }

  if (dryRun) {
    console.log(`\n[dry-run] Would update:`)
    console.log(`  registry/shadcnmaps/maps/registry.ts`)
    console.log(`  registry/shadcnmaps/map-data/registry.ts`)
    console.log(`  lib/navigation.ts`)
    console.log(`  docs/MAP-TRACKING.md`)
    console.log(`\n[dry-run] Would run: pnpm registry:build`)
    console.log(
      `\nDone (dry run). ${converted.length} map(s) would be converted.`
    )
    process.exit(0)
  }

  // Update shared files
  console.log('\nUpdating registries...')
  updateMapsRegistry(converted)
  updateMapDataRegistry(converted)

  console.log('Updating navigation...')
  updateNavigation(converted)

  console.log('Updating tracking...')
  updateTracking(converted.map((c) => c.mapId))

  console.log(
    `\nDone! ${converted.length} map(s) converted. Run \`pnpm registry:build\` to rebuild.`
  )
}

main()
