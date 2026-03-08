'use client'

import { Map, type MapProps } from '../map'
import { europeMapData } from '../map-data/europe'

export type RegionId = (typeof europeMapData)['regions'][number]['id']

export interface EuropeMapProps extends Omit<MapProps, 'data'> {}

export function EuropeMap(props: EuropeMapProps) {
  return <Map data={europeMapData} {...props} />
}
