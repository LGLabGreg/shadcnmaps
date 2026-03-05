import type { ReactNode } from 'react'

import { InstallCommand } from './install-command'
import { LlmsButtons } from './llms-buttons'

interface MapPageProps {
  title: string
  description: string
  registryName: string
  children: ReactNode
}

export function MapPage({
  title,
  description,
  registryName,
  children,
}: MapPageProps) {
  return (
    <div className='p-6 md:p-8'>
      <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
      <p className='mt-2 text-muted-foreground'>{description}</p>
      <div className='mt-4 flex flex-wrap gap-2'>
        <InstallCommand registryName={registryName} />
        <LlmsButtons slug={registryName} />
      </div>
      <div className='grid grid-cols-1 gap-6'>{children}</div>
    </div>
  )
}
