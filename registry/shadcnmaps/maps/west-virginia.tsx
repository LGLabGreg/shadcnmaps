'use client'

import { Map, type MapProps } from '../map'
import { westVirginiaMapData } from '../map-data/west-virginia'

export type RegionId = (typeof westVirginiaMapData)['regions'][number]['id']

export interface WestVirginiaMapProps extends Omit<MapProps, 'data'> {}

export function WestVirginiaMap(props: WestVirginiaMapProps) {
  return <Map data={westVirginiaMapData} {...props} />
}
