'use client'

import { USAMap } from '@/registry/shadcnmaps/maps/usa-map'
import type { StateId } from '@/registry/shadcnmaps/maps/usa-map'
import { useState } from 'react'

// 2020 US Census (approximate)
const POPULATION: Partial<Record<StateId, number>> = {
  AK: 733391,
  AL: 5024279,
  AR: 3011524,
  AZ: 7151502,
  CA: 39538223,
  CO: 5773714,
  CT: 3605944,
  DC: 689545,
  DE: 989948,
  FL: 21538187,
  GA: 10711908,
  HI: 1455271,
  IA: 3190369,
  ID: 1839106,
  IL: 12812508,
  IN: 6785528,
  KS: 2937880,
  KY: 4505836,
  LA: 4657757,
  MA: 7029917,
  MD: 6177224,
  ME: 1362359,
  MI: 10077331,
  MN: 5706494,
  MO: 6154913,
  MS: 2961279,
  MT: 1084225,
  NC: 10439388,
  ND: 779094,
  NE: 1961504,
  NH: 1377529,
  NJ: 9288994,
  NM: 2117522,
  NV: 3104614,
  NY: 20201249,
  OH: 11799448,
  OK: 3959353,
  OR: 4237256,
  PA: 13002700,
  RI: 1097379,
  SC: 5118425,
  SD: 886667,
  TN: 6910840,
  TX: 29145505,
  UT: 3271616,
  VA: 8631393,
  VT: 643077,
  WA: 7705281,
  WI: 5893718,
  WV: 1793716,
  WY: 576851,
}

const MAX_POP = Math.max(...(Object.values(POPULATION) as number[]))

function choroplethClass(id: StateId): string {
  const pop = POPULATION[id]
  if (!pop) return ''
  const r = pop / MAX_POP
  if (r > 0.6) return 'fill-blue-700 hover:fill-blue-800'
  if (r > 0.3) return 'fill-blue-500 hover:fill-blue-600'
  if (r > 0.15) return 'fill-blue-300 hover:fill-blue-400'
  if (r > 0.05) return 'fill-blue-200 hover:fill-blue-300'
  return 'fill-blue-100 hover:fill-blue-200'
}

function SimpleExample() {
  return (
    <section className='space-y-2'>
      <h2 className='font-semibold'>Simple</h2>
      <p className='text-sm text-muted-foreground'>Zero configuration.</p>
      <USAMap />
    </section>
  )
}

function AdvancedExample() {
  const [selected, setSelected] = useState<StateId | null>(null)

  return (
    <section className='space-y-2'>
      <h2 className='font-semibold'>Advanced</h2>
      <p className='min-h-5 text-sm text-muted-foreground'>
        {selected ? `Selected: ${selected}` : 'Click a state.'}
      </p>
      <USAMap
        states={
          selected
            ? [{ id: selected, className: 'fill-map-region-selected' }]
            : []
        }
        onRegionClick={({ region }) =>
          setSelected((prev) =>
            prev === region.id ? null : (region.id as StateId)
          )
        }
        renderTooltip={(region) => (
          <span className='font-medium'>{region.name}</span>
        )}
      />
    </section>
  )
}

function ChoroplethExample() {
  const states = (Object.keys(POPULATION) as StateId[]).map((id) => ({
    id,
    className: choroplethClass(id),
    tooltipContent: (
      <div>
        <p className='font-medium'>{id}</p>
        <p className='text-muted-foreground'>
          {POPULATION[id]!.toLocaleString()}
        </p>
      </div>
    ),
  }))

  return (
    <section className='space-y-2'>
      <h2 className='font-semibold'>Choropleth</h2>
      <p className='min-h-5 text-sm text-muted-foreground'>
        Population by state (2020 census).
      </p>
      <USAMap states={states} />
    </section>
  )
}

export function Demo() {
  return (
    <div className='grid grid-cols-1 gap-10 px-12'>
      <SimpleExample />
      <AdvancedExample />
      <ChoroplethExample />
    </div>
  )
}
