'use client'

import { Map, type MapProps } from '../map'
import { jordanMapData } from '../map-data/jordan'

export type RegionId = (typeof jordanMapData)['regions'][number]['id']

export interface JordanMapProps extends Omit<MapProps, 'data'> {}

export function JordanMap(props: JordanMapProps) {
  return <Map data={jordanMapData} {...props} />
}
