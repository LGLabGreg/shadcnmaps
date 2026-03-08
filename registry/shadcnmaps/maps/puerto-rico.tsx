'use client'

import { Map, type MapProps } from '../map'
import { puertoRicoMapData } from '../map-data/puerto-rico'

export type RegionId = (typeof puertoRicoMapData)['regions'][number]['id']

export interface PuertoRicoMapProps extends Omit<MapProps, 'data'> {}

export function PuertoRicoMap(props: PuertoRicoMapProps) {
  return <Map data={puertoRicoMapData} {...props} />
}
