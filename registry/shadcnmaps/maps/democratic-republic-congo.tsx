'use client'

import { Map, type MapProps } from '../map'
import { democraticRepublicCongoMapData } from '../map-data/democratic-republic-congo'

export type RegionId =
  (typeof democraticRepublicCongoMapData)['regions'][number]['id']

export interface DemocraticRepublicCongoMapProps extends Omit<
  MapProps,
  'data'
> {}

export function DemocraticRepublicCongoMap(
  props: DemocraticRepublicCongoMapProps
) {
  return <Map data={democraticRepublicCongoMapData} {...props} />
}
