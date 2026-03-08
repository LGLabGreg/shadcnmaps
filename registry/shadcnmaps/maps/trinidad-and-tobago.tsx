'use client'

import { Map, type MapProps } from '../map'
import { trinidadAndTobagoMapData } from '../map-data/trinidad-and-tobago'

export type RegionId =
  (typeof trinidadAndTobagoMapData)['regions'][number]['id']

export interface TrinidadAndTobagoMapProps extends Omit<MapProps, 'data'> {}

export function TrinidadAndTobagoMap(props: TrinidadAndTobagoMapProps) {
  return <Map data={trinidadAndTobagoMapData} {...props} />
}
