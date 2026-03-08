'use client'

import { Map, type MapProps } from '../map'
import { newMexicoMapData } from '../map-data/new-mexico'

export type RegionId = (typeof newMexicoMapData)['regions'][number]['id']

export interface NewMexicoMapProps extends Omit<MapProps, 'data'> {}

export function NewMexicoMap(props: NewMexicoMapProps) {
  return <Map data={newMexicoMapData} {...props} />
}
