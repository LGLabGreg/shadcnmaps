'use client'

import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

import { Logo } from './logo'

export default function MainNav() {
  return (
    <header className='flex flex-1 items-center border-b bg-background px-4 py-3'>
      <div className='container mx-auto flex max-w-7xl items-center gap-6'>
        <div className='flex items-center gap-2 font-semibold'>
          <Logo />
          shadcnmaps
        </div>

        <div className='ml-auto'>
          <Button
            variant='ghost'
            size='icon'
            render={
              <a href='https://github.com/LGLabGreg/shadcnmaps' target='_blank'>
                <Github />
              </a>
            }
            nativeButton={false}
          ></Button>
        </div>
      </div>
    </header>
  )
}
