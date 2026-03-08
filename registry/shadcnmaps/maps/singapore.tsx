'use client'

import { Map, type MapProps } from '../map'
import { singaporeMapData } from '../map-data/singapore'

export type RegionId = (typeof singaporeMapData)['regions'][number]['id']

export interface SingaporeMapProps extends Omit<MapProps, 'data'> {}

export function SingaporeMap(props: SingaporeMapProps) {
  return <Map data={singaporeMapData} {...props} />
}
