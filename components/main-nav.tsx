'use client'

import { Button } from '@/components/ui/button'
import { Github, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Logo } from './logo'

export default function MainNav() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className='flex flex-1 items-center border-b bg-background px-4 py-3'>
      <div className='container mx-auto flex max-w-7xl items-center gap-6'>
        <div className='flex items-center gap-2 font-semibold'>
          <Logo />
          shadcnmaps
        </div>

        <div className='ml-auto flex items-center gap-1'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            <Sun className='size-5 scale-100 rotate-0 transition-transform dark:scale-0 dark:rotate-90' />
            <Moon className='absolute size-5 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
          <Button
            variant='ghost'
            size='icon'
            render={
              <a href='https://github.com/LGLabGreg/shadcnmaps' target='_blank'>
                <Github />
              </a>
            }
            nativeButton={false}
          />
        </div>
      </div>
    </header>
  )
}
