'use client'

import { Button } from '@/components/ui/button'
import { AfricaMap } from '@/registry/shadcnmaps/maps/africa'
import { AustraliaMap } from '@/registry/shadcnmaps/maps/australia'
import { BrazilMap } from '@/registry/shadcnmaps/maps/brazil'
import { EuropeMap } from '@/registry/shadcnmaps/maps/europe'
import { JapanMap } from '@/registry/shadcnmaps/maps/japan'
import { USAMap } from '@/registry/shadcnmaps/maps/usa'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const maps = [
  { name: 'USA', component: USAMap, href: '/maps/usa' },
  { name: 'Europe', component: EuropeMap, href: '/maps/europe' },
  { name: 'Africa', component: AfricaMap, href: '/maps/africa' },
  { name: 'Brazil', component: BrazilMap, href: '/maps/brazil' },
  { name: 'Japan', component: JapanMap, href: '/maps/japan' },
  { name: 'Australia', component: AustraliaMap, href: '/maps/australia' },
]

export function MapShowcase() {
  return (
    <section className='container mx-auto max-w-7xl px-6 pb-16'>
      <div className='pt-10'>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {maps.map((map) => (
            <Link
              key={map.name}
              href={map.href}
              className='group relative flex h-52 items-center justify-center overflow-hidden rounded-lg border bg-muted/30 p-4 transition-colors group-hover:bg-muted/60'
            >
              <map.component
                showLabels={false}
                className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-105'
              />
              <span className='absolute bottom-3 left-3 rounded-md bg-background/80 px-2 py-1 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0'>
                {map.name}
              </span>
            </Link>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <Button
            size='lg'
            variant='outline'
            render={
              <Link href='/maps'>
                Browse all 170+ maps <ArrowRight />
              </Link>
            }
            nativeButton={false}
          />
        </div>
      </div>
    </section>
  )
}
