'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Globe, Map } from 'lucide-react'
import Link from 'next/link'

import { SquareGrid } from './square-grid'

export function Hero() {
  return (
    <section className='relative flex flex-col items-center gap-8 overflow-hidden px-5 py-8 text-center md:py-12'>
      <div className='absolute inset-0 flex h-full w-full items-center justify-center opacity-100'>
        <SquareGrid className='mask-[radial-gradient(75%_75%_at_center,white,transparent)] opacity-50' />
      </div>
      <div className='relative z-10 flex flex-col items-center'>
        <div className='mb-6 flex flex-col items-center gap-3'>
          <Link
            href='/overview/quick-start'
            className='mx-auto inline-flex items-center gap-3 rounded-full border bg-background px-2 py-1 text-sm shadow-xs'
          >
            <span className='inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground'>
              Beta
            </span>
            <span className='font-medium'>
              Introducing <span className='font-semibold'>shadcnmaps</span>
            </span>
            <span className='flex size-7 items-center justify-center rounded-full bg-muted'>
              <ArrowRight className='size-4' />
            </span>
          </Link>
          <h1 className='leading-tighter max-w-4xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.2] lg:font-semibold xl:text-5xl xl:tracking-tighter'>
            Interactive SVG Maps for React
          </h1>
          <p className='max-w-3xl text-base text-foreground sm:text-lg'>
            Beautiful map components powered by pure SVG. No dependencies — just
            install via shadcn CLI and start building.
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-4'>
          <Button
            size='lg'
            render={
              <Link href='/overview/quick-start'>
                Get Started
                <ArrowRight />
              </Link>
            }
            nativeButton={false}
          />
          <Button
            variant='outline'
            size='lg'
            render={
              <Link href='/maps/usa-map'>
                <Map /> Maps
              </Link>
            }
            nativeButton={false}
          />
          <Button
            variant='outline'
            size='lg'
            render={
              <Link href='/examples/choropleth'>
                <Globe /> Examples
              </Link>
            }
            nativeButton={false}
          />
        </div>
      </div>
    </section>
  )
}
