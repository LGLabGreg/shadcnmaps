'use client'

import { Map, type MapProps } from '../map'
import { coloradoMapData } from '../map-data/colorado'

export type RegionId = (typeof coloradoMapData)['regions'][number]['id']

export interface ColoradoMapProps extends Omit<MapProps, 'data'> {}

export function ColoradoMap(props: ColoradoMapProps) {
  return <Map data={coloradoMapData} {...props} />
}
