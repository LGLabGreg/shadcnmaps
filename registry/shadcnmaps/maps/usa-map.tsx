'use client'

import { Map, type MapProps } from '@/registry/shadcnmaps/map'
import { usaMapData } from '@/registry/shadcnmaps/map-data/usa'
import type { MapMarkerData, MapRegionData } from '@/registry/shadcnmaps/types'
import type { ReactNode } from 'react'

export type StateId =
  | 'AK'
  | 'AL'
  | 'AR'
  | 'AZ'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DC'
  | 'DE'
  | 'FL'
  | 'GA'
  | 'HI'
  | 'IA'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'MA'
  | 'MD'
  | 'ME'
  | 'MI'
  | 'MN'
  | 'MO'
  | 'MS'
  | 'MT'
  | 'NC'
  | 'ND'
  | 'NE'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NV'
  | 'NY'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TX'
  | 'UT'
  | 'VA'
  | 'VT'
  | 'WA'
  | 'WI'
  | 'WV'
  | 'WY'

type StateOverride = Partial<MapRegionData> & {
  id: StateId
  className?: string
  tooltipContent?: ReactNode
  disabled?: boolean
}

export interface USAMapProps extends Omit<
  MapProps,
  'data' | 'regions' | 'disabledRegions'
> {
  /** Per-state overrides. Typed with StateId for autocomplete. */
  states?: StateOverride[]
  /** State IDs to disable. */
  disabledStates?: StateId[]
  markers?: MapMarkerData[]
}

export function USAMap({ states, disabledStates, ...props }: USAMapProps) {
  return (
    <Map
      data={usaMapData}
      regions={states}
      disabledRegions={disabledStates}
      {...props}
    />
  )
}
