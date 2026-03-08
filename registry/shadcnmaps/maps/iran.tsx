'use client'

import { Map, type MapProps } from '../map'
import { iranMapData } from '../map-data/iran'

export type RegionId = (typeof iranMapData)['regions'][number]['id']

export interface IranMapProps extends Omit<MapProps, 'data'> {}

export function IranMap(props: IranMapProps) {
  return <Map data={iranMapData} {...props} />
}
