'use client'

import { Map, type MapProps } from '../map'
import { cameroonMapData } from '../map-data/cameroon'

export type RegionId = (typeof cameroonMapData)['regions'][number]['id']

export interface CameroonMapProps extends Omit<MapProps, 'data'> {}

export function CameroonMap(props: CameroonMapProps) {
  return <Map data={cameroonMapData} {...props} />
}
