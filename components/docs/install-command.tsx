'use client'

import { Button } from '@/components/ui/button'
import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className='flex max-w-fit items-center gap-3 rounded-lg border bg-muted px-4 py-2.5 font-mono text-sm'>
      <span className='text-muted-foreground select-none'>$</span>
      <span>{command}</span>
      <Button
        variant='ghost'
        size='icon-sm'
        onClick={copy}
        aria-label='Copy command'
        className='ml-1 shrink-0'
      >
        {copied ? (
          <Check className='size-3.5' />
        ) : (
          <Copy className='size-3.5' />
        )}
      </Button>
    </div>
  )
}
