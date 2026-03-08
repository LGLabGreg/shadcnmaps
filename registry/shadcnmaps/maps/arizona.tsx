'use client'

import { Map, type MapProps } from '../map'
import { arizonaMapData } from '../map-data/arizona'

export type RegionId = (typeof arizonaMapData)['regions'][number]['id']

export interface ArizonaMapProps extends Omit<MapProps, 'data'> {}

export function ArizonaMap(props: ArizonaMapProps) {
  return <Map data={arizonaMapData} {...props} />
}
