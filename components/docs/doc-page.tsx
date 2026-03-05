import type { ReactNode } from 'react'

import { LlmsButtons } from './llms-buttons'

export function DocPage({
  children,
  llmsSlug,
}: {
  children: ReactNode
  llmsSlug?: string
}) {
  return (
    <div className='p-6 md:p-8'>
      {llmsSlug && (
        <div className='mb-6'>
          <LlmsButtons slug={llmsSlug} />
        </div>
      )}
      {children}
    </div>
  )
}
