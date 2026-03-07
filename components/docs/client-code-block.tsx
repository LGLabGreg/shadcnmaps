'use client'

import { useEffect, useState } from 'react'
import { codeToHtml } from 'shiki'

import { CopyButton } from './copy-button'

interface ClientCodeBlockProps {
  code: string
  language?: string
}

export function ClientCodeBlock({
  code,
  language = 'tsx',
}: ClientCodeBlockProps) {
  const [html, setHtml] = useState<string>('')
  const trimmed = code.trim()

  useEffect(() => {
    let cancelled = false
    codeToHtml(trimmed, {
      lang: language,
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast',
      },
      defaultColor: false,
    }).then((result) => {
      if (!cancelled) setHtml(result)
    })
    return () => {
      cancelled = true
    }
  }, [trimmed, language])

  return (
    <div className='relative'>
      <CopyButton code={trimmed} />
      <div
        className='[&_pre]:overflow-x-auto [&_pre]:p-4 [&_pre]:pr-12 [&_pre]:text-sm [&_pre]:leading-relaxed'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
