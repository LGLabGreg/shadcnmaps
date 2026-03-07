import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Map, type MapProps } from '../map'
import type { MapData, MapMarkerData } from '../types'

export const testMapData: MapData = {
  id: 'test',
  name: 'Test Map',
  viewBox: '0 0 100 100',
  regions: [
    {
      id: 'A',
      name: 'Region A',
      path: 'M10 10 L20 10 L20 20 Z',
      abbreviation: 'A',
      labelX: 15,
      labelY: 15,
    },
    {
      id: 'B',
      name: 'Region B',
      path: 'M30 30 L40 30 L40 40 Z',
      abbreviation: 'B',
      labelX: 35,
      labelY: 35,
    },
    {
      id: 'C',
      name: 'Region C',
      path: 'M50 50 L60 50 L60 60 Z',
    },
  ],
}

export const testMarkers: MapMarkerData[] = [
  {
    id: 'marker-1',
    x: 25,
    y: 25,
    content: <circle r={3} fill='red' />,
    label: 'City Alpha',
    tooltipContent: 'Alpha tooltip',
  },
  {
    id: 'marker-2',
    x: 75,
    y: 75,
    content: <circle r={3} fill='blue' />,
    label: 'City Beta',
    disabled: true,
  },
]

export function renderMap(overrides: Partial<MapProps> = {}) {
  const user = userEvent.setup()
  const props: MapProps = {
    data: testMapData,
    ...overrides,
  }
  const result = render(<Map {...props} />)
  return { user, ...result }
}
