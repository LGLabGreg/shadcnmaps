'use client'

import { Map, type MapProps } from '../map'
import { iraqMapData } from '../map-data/iraq'

export type RegionId = (typeof iraqMapData)['regions'][number]['id']

export interface IraqMapProps extends Omit<MapProps, 'data'> {}

export function IraqMap(props: IraqMapProps) {
  return <Map data={iraqMapData} {...props} />
}
