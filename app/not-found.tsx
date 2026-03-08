import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
      <h1 className='text-4xl font-bold tracking-tight'>404</h1>
      <p className='text-lg text-muted-foreground'>
        This page could not be found.
      </p>
      <div className='flex gap-3'>
        <Button
          render={
            <Link href='/maps'>
              Browse Maps <ArrowRight className='size-4' />
            </Link>
          }
          nativeButton={false}
        />
        <Button
          variant='outline'
          render={<Link href='/overview/getting-started'>Getting Started</Link>}
          nativeButton={false}
        />
      </div>
    </div>
  )
}
