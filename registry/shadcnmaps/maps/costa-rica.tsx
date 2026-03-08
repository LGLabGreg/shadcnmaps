'use client'

import { Map, type MapProps } from '../map'
import { costaRicaMapData } from '../map-data/costa-rica'

export type RegionId = (typeof costaRicaMapData)['regions'][number]['id']

export interface CostaRicaMapProps extends Omit<MapProps, 'data'> {}

export function CostaRicaMap(props: CostaRicaMapProps) {
  return <Map data={costaRicaMapData} {...props} />
}
