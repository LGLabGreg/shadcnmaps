'use client'

import { Button } from '@/components/ui/button'
import { Check, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

export function LlmsButtons({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false)
  const url = `/llms/${slug}.md`

  async function copy() {
    const res = await fetch(url)
    const text = await res.text()
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <span className='inline-flex gap-2'>
      <Button variant='outline' size='sm' onClick={copy}>
        Copy markdown
        {copied ? <Check /> : <Copy />}
      </Button>
      <Button
        variant='outline'
        size='sm'
        render={
          <a href={url} target='_blank' rel='noopener noreferrer'>
            View markdown
            <ExternalLink />
          </a>
        }
        nativeButton={false}
      />
    </span>
  )
}
