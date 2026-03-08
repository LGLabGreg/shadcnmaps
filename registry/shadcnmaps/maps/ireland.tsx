'use client'

import { Map, type MapProps } from '../map'
import { irelandMapData } from '../map-data/ireland'

export type RegionId = (typeof irelandMapData)['regions'][number]['id']

export interface IrelandMapProps extends Omit<MapProps, 'data'> {}

export function IrelandMap(props: IrelandMapProps) {
  return <Map data={irelandMapData} {...props} />
}
