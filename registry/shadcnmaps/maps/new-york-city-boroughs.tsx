'use client'

import { Map, type MapProps } from '../map'
import { newYorkCityBoroughsMapData } from '../map-data/new-york-city-boroughs'

export type RegionId =
  (typeof newYorkCityBoroughsMapData)['regions'][number]['id']

export interface NewYorkCityBoroughsMapProps extends Omit<MapProps, 'data'> {}

export function NewYorkCityBoroughsMap(props: NewYorkCityBoroughsMapProps) {
  return <Map data={newYorkCityBoroughsMapData} {...props} />
}
