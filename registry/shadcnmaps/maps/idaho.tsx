'use client'

import { Map, type MapProps } from '../map'
import { idahoMapData } from '../map-data/idaho'

export type RegionId = (typeof idahoMapData)['regions'][number]['id']

export interface IdahoMapProps extends Omit<MapProps, 'data'> {}

export function IdahoMap(props: IdahoMapProps) {
  return <Map data={idahoMapData} {...props} />
}
