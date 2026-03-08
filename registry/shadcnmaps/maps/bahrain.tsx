'use client'

import { Map, type MapProps } from '../map'
import { bahrainMapData } from '../map-data/bahrain'

export type RegionId = (typeof bahrainMapData)['regions'][number]['id']

export interface BahrainMapProps extends Omit<MapProps, 'data'> {}

export function BahrainMap(props: BahrainMapProps) {
  return <Map data={bahrainMapData} {...props} />
}
