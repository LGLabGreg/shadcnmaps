import type { ReactNode } from 'react'

export function DocPage({ children }: { children: ReactNode }) {
  return <div className='p-6 md:p-8'>{children}</div>
}
