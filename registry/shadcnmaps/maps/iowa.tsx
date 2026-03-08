'use client'

import { Map, type MapProps } from '../map'
import { iowaMapData } from '../map-data/iowa'

export type RegionId = (typeof iowaMapData)['regions'][number]['id']

export interface IowaMapProps extends Omit<MapProps, 'data'> {}

export function IowaMap(props: IowaMapProps) {
  return <Map data={iowaMapData} {...props} />
}
