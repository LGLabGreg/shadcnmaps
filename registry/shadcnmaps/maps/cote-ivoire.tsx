'use client'

import { Map, type MapProps } from '../map'
import { coteIvoireMapData } from '../map-data/cote-ivoire'

export type RegionId = (typeof coteIvoireMapData)['regions'][number]['id']

export interface CoteIvoireMapProps extends Omit<MapProps, 'data'> {}

export function CoteIvoireMap(props: CoteIvoireMapProps) {
  return <Map data={coteIvoireMapData} {...props} />
}
