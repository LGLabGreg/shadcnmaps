import { Button } from '@/components/ui/button'
import { ArrowRight, Map } from 'lucide-react'
import Link from 'next/link'

import { InstallCommand } from './install-command'
import { JsonLd } from './json-ld'

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-10 px-6 text-center'>
      <JsonLd />
      <div className='flex flex-col items-center gap-4'>
        <div className='flex items-center gap-2.5'>
          <Map className='size-8' />
          <h1 className='text-4xl font-bold tracking-tight'>shadcnmaps</h1>
        </div>
        <p className='max-w-md text-lg text-muted-foreground'>
          Interactive SVG map components for React. No dependencies, pure
          Tailwind.
        </p>
      </div>

      <InstallCommand />

      <div className='flex flex-wrap justify-center gap-3 text-sm text-muted-foreground'>
        <Link
          href='/llms.txt'
          className='transition-colors hover:text-foreground'
        >
          llms.txt
        </Link>
      </div>

      <div className='flex flex-wrap justify-center gap-3'>
        <Button
          size='lg'
          render={<Link href='/overview/getting-started' />}
          nativeButton={false}
        >
          Get Started <ArrowRight className='size-4' />
        </Button>
        <Button
          variant='outline'
          size='lg'
          render={<Link href='https://github.com/LGLabGreg/shadcnmaps' />}
          nativeButton={false}
        >
          GitHub
        </Button>
      </div>
    </main>
  )
}
