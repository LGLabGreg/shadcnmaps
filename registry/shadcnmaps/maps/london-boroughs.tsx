'use client'

import { Map, type MapProps } from '../map'
import { LondonBoroughsMapData } from '../map-data/london-boroughs'

export type RegionId = (typeof LondonBoroughsMapData)['regions'][number]['id']

export interface LondonBoroughsMapProps extends Omit<MapProps, 'data'> {}

export function LondonBoroughsMap(props: LondonBoroughsMapProps) {
  return <Map data={LondonBoroughsMapData} {...props} />
}
