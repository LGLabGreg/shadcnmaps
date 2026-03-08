'use client'

import { Map, type MapProps } from '../map'
import { usaTerritoriesMapData } from '../map-data/usa-territories'

export type RegionId = (typeof usaTerritoriesMapData)['regions'][number]['id']

export interface UsaTerritoriesMapProps extends Omit<MapProps, 'data'> {}

export function UsaTerritoriesMap(props: UsaTerritoriesMapProps) {
  return <Map data={usaTerritoriesMapData} {...props} />
}
