'use client'

import { Map, type MapProps } from '../map'
import { kentuckyMapData } from '../map-data/kentucky'

export type RegionId = (typeof kentuckyMapData)['regions'][number]['id']

export interface KentuckyMapProps extends Omit<MapProps, 'data'> {}

export function KentuckyMap(props: KentuckyMapProps) {
  return <Map data={kentuckyMapData} {...props} />
}
