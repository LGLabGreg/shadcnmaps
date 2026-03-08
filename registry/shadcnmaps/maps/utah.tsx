'use client'

import { Map, type MapProps } from '../map'
import { utahMapData } from '../map-data/utah'

export type RegionId = (typeof utahMapData)['regions'][number]['id']

export interface UtahMapProps extends Omit<MapProps, 'data'> {}

export function UtahMap(props: UtahMapProps) {
  return <Map data={utahMapData} {...props} />
}
