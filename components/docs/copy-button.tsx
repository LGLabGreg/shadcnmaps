'use client'

import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant='ghost'
      size='icon-sm'
      onClick={handleCopy}
      className='absolute top-2 right-2 backdrop-blur-sm'
      aria-label={copied ? 'Copied' : 'Copy code'}
    >
      {copied ? <Check className='size-4' /> : <Copy className='size-4' />}
    </Button>
  )
}
