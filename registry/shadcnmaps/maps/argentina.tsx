'use client'

import { Map, type MapProps } from '../map'
import { argentinaMapData } from '../map-data/argentina'

export type RegionId = (typeof argentinaMapData)['regions'][number]['id']

export interface ArgentinaMapProps extends Omit<MapProps, 'data'> {}

export function ArgentinaMap(props: ArgentinaMapProps) {
  return <Map data={argentinaMapData} {...props} />
}
