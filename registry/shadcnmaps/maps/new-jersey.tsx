'use client'

import { Map, type MapProps } from '../map'
import { newJerseyMapData } from '../map-data/new-jersey'

export type RegionId = (typeof newJerseyMapData)['regions'][number]['id']

export interface NewJerseyMapProps extends Omit<MapProps, 'data'> {}

export function NewJerseyMap(props: NewJerseyMapProps) {
  return <Map data={newJerseyMapData} {...props} />
}
