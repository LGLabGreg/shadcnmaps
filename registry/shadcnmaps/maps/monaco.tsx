'use client'

import { Map, type MapProps } from '../map'
import { monacoMapData } from '../map-data/monaco'

export type RegionId = (typeof monacoMapData)['regions'][number]['id']

export interface MonacoMapProps extends Omit<MapProps, 'data'> {}

export function MonacoMap(props: MonacoMapProps) {
  return <Map data={monacoMapData} {...props} />
}
