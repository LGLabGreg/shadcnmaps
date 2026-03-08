'use client'

import { Button } from '@/components/ui/button'
import { WorldMap } from '@/registry/shadcnmaps/maps/world'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className='relative container mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16'>
      {/* World map background */}
      <div className='absolute inset-0 flex items-end justify-center overflow-hidden'>
        <div className='w-full min-w-[1000px] translate-y-[15%] opacity-[0.12] blur-[2px] filter **:data-[slot=map-region]:fill-foreground **:data-[slot=map-region]:stroke-foreground'>
          <WorldMap showLabels={false} showTooltips={false} />
        </div>
      </div>

      {/* Text */}
      <div className='relative z-10'>
        <h1 className='text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl'>
          Interactive
          <br />
          SVG maps
        </h1>

        <div className='mt-8 flex flex-col gap-4 md:mt-10'>
          <p className='max-w-md text-lg'>
            Drop-in map components for React. Hover tooltips, region selection,
            map controls — all built in. One CLI command to install.
          </p>
          <div className='flex flex-wrap items-center gap-3'>
            <Button
              size='lg'
              render={
                <Link href='/overview/getting-started'>
                  Get Started
                  <ArrowRight />
                </Link>
              }
              nativeButton={false}
            />
            <Button
              variant='outline'
              size='lg'
              render={<Link href='/maps'>Browse 170+ maps</Link>}
              nativeButton={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
