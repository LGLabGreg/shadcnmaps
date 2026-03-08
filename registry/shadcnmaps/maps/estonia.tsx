'use client'

import { Map, type MapProps } from '../map'
import { estoniaMapData } from '../map-data/estonia'

export type RegionId = (typeof estoniaMapData)['regions'][number]['id']

export interface EstoniaMapProps extends Omit<MapProps, 'data'> {}

export function EstoniaMap(props: EstoniaMapProps) {
  return <Map data={estoniaMapData} {...props} />
}
