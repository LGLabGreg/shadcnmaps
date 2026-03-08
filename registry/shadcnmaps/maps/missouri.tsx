'use client'

import { Map, type MapProps } from '../map'
import { missouriMapData } from '../map-data/missouri'

export type RegionId = (typeof missouriMapData)['regions'][number]['id']

export interface MissouriMapProps extends Omit<MapProps, 'data'> {}

export function MissouriMap(props: MissouriMapProps) {
  return <Map data={missouriMapData} {...props} />
}
