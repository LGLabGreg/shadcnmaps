'use client'

import { Button } from '@/components/ui/button'
import { Check, Copy, Terminal } from 'lucide-react'
import { useState } from 'react'

export function InstallCommand({ registryName }: { registryName: string }) {
  const [copied, setCopied] = useState(false)
  const command = `npx shadcn@latest add @shadcnmaps/${registryName}`

  function copy() {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button
      variant='outline'
      size='sm'
      onClick={copy}
      data-umami-event='Install command'
      data-umami-event-map={registryName}
    >
      <Terminal />
      {`add @shadcnmaps/${registryName}`}
      {copied ? <Check className='ml-1' /> : <Copy className='ml-1' />}
    </Button>
  )
}
