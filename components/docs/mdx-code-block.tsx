import { type ReactElement, type ReactNode, isValidElement } from 'react'
import { codeToHtml } from 'shiki'

import { InlineCopyButton } from './inline-copy-button'

interface MDXCodeBlockProps {
  children: ReactNode
}

function extractCodeInfo(children: ReactNode): {
  code: string
  language: string
} {
  // MDX renders code blocks as <pre><code className="language-xxx">...</code></pre>
  // We receive the <code> element as children
  if (isValidElement(children)) {
    const codeElement = children as ReactElement<{
      className?: string
      children?: ReactNode
    }>

    // Extract language from className (e.g., "language-bash" -> "bash")
    const className = codeElement.props.className || ''
    const languageMatch = className.match(/language-(\w+)/)
    const language = languageMatch ? languageMatch[1] : 'text'

    // Extract code text from children
    const code =
      typeof codeElement.props.children === 'string'
        ? codeElement.props.children
        : ''

    return { code: code.trim(), language }
  }

  return { code: '', language: 'text' }
}

export async function MDXCodeBlock({ children }: MDXCodeBlockProps) {
  const { code, language } = extractCodeInfo(children)

  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      light: 'github-light-high-contrast',
      dark: 'github-dark-high-contrast',
    },
    defaultColor: false,
  })

  return (
    <div className='mt-5 mb-4 overflow-hidden rounded-lg border'>
      <div className='flex items-center justify-between border-b bg-muted/50 px-4 py-1'>
        <span className='font-mono text-xs'>{language}</span>
        <InlineCopyButton code={code} />
      </div>
      <div
        className='[&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
