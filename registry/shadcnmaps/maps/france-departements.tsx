'use client'

import { Map, type MapProps } from '../map'
import { franceDepartementsMapData } from '../map-data/france-departements'

export type RegionId =
  (typeof franceDepartementsMapData)['regions'][number]['id']

export interface FranceDepartementsMapProps extends Omit<MapProps, 'data'> {}

export function FranceDepartementsMap(props: FranceDepartementsMapProps) {
  return <Map data={franceDepartementsMapData} {...props} />
}
