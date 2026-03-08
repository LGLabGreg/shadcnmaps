'use client'

import { Map, type MapProps } from '../map'
import { wisconsinMapData } from '../map-data/wisconsin'

export type RegionId = (typeof wisconsinMapData)['regions'][number]['id']

export interface WisconsinMapProps extends Omit<MapProps, 'data'> {}

export function WisconsinMap(props: WisconsinMapProps) {
  return <Map data={wisconsinMapData} {...props} />
}
