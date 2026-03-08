<DocPage llmsSlug="choropleth">

# Choropleth

Color-code regions by a numeric value such as population, GDP, or any metric. Each region gets a fill class based on its value relative to the maximum.

This pattern uses the `regions` prop to assign per-region `className` and `tooltipContent` based on a data lookup.

```tsx
'use client'

import { USAMap, type RegionId } from '@/components/shadcnmaps/maps/usa'

// 2020 US Census (approximate)
const POPULATION: Record<RegionId, number> = {
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

const BUCKETS = [
  {
    min: 0.6,
    label: '> 23M',
    className: 'fill-sky-900 hover:fill-sky-800',
    swatch: 'bg-sky-900',
  },
  {
    min: 0.3,
    label: '12M – 23M',
    className: 'fill-sky-800 hover:fill-sky-700',
    swatch: 'bg-sky-800',
  },
  {
    min: 0.15,
    label: '6M – 12M',
    className: 'fill-sky-700 hover:fill-sky-600',
    swatch: 'bg-sky-700',
  },
  {
    min: 0.05,
    label: '2M – 6M',
    className: 'fill-sky-600 hover:fill-sky-500',
    swatch: 'bg-sky-600',
  },
  {
    min: 0,
    label: '< 2M',
    className: 'fill-sky-500 hover:fill-sky-400',
    swatch: 'bg-sky-500',
  },
]

function colorClasses(id: RegionId): {
  className: string
  labelClassName?: string
} {
  const pop = POPULATION[id]
  if (!pop) return { className: '' }
  const r = pop / MAX_POP
  const bucket = BUCKETS.find((b) => r > b.min) ?? BUCKETS[BUCKETS.length - 1]
  return { className: bucket.className }
}

export default function ChoroplethExample() {
  const regions = (Object.keys(POPULATION) as RegionId[]).map((id) => ({
    id,
    ...colorClasses(id),
    tooltipContent: (
      <div>
        <p className='font-medium'>{id}</p>
        <p className='text-muted-foreground'>
          Pop. {POPULATION[id]!.toLocaleString()}
        </p>
      </div>
    ),
  }))

  return (
    <div>
      <div className='mb-4'>
        <h3 className='text-lg font-semibold'>US Population by State</h3>
        <p className='text-sm text-muted-foreground'>2020 Census estimates</p>
      </div>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto]'>
        <USAMap regions={regions} />
        <div>
          <p className='mb-1.5 font-medium'>Population</p>
          <div className='flex flex-col gap-1 text-xs'>
            {BUCKETS.map((b) => (
              <div key={b.label} className='flex items-center gap-1.5'>
                <span
                  className={`inline-block h-3 w-3 rounded-xs ${b.swatch}`}
                />
                <span className='text-muted-foreground'>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
```
