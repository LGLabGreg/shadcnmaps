import type {
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  TouchEvent,
} from 'react'

/** Unique identifier for the region (e.g., "AL", "CA", "FR-IDF") */
export interface MapRegionData {
  id: string
  /** Human-readable display name */
  name: string
  /** SVG path d attribute */
  path: string
  /** Short abbreviation (e.g., "AL") */
  abbreviation?: string
  /** X coordinate for the abbreviation label within the SVG viewBox */
  labelX?: number
  /** Y coordinate for the abbreviation label within the SVG viewBox */
  labelY?: number
  /** Arbitrary metadata attached to the region, passed back in event callbacks */
  metadata?: Record<string, unknown>
}

export interface MapData {
  /** Unique map identifier (e.g., "usa", "world", "france") */
  id: string
  /** Human-readable map name */
  name: string
  /** SVG viewBox string (e.g., "0 0 930 590") */
  viewBox: string
  /** Array of region path data */
  regions: MapRegionData[]
}

export interface MapMarkerData {
  /** Unique identifier */
  id: string
  /** X coordinate in the map's SVG coordinate system */
  x: number
  /** Y coordinate in the map's SVG coordinate system */
  y: number
  /** SVG content to render at (x, y) */
  content: ReactNode
  /** Tooltip content shown on hover/click */
  tooltipContent?: ReactNode
  /** Accessible label */
  label?: string
  /** When true, the marker is not interactive */
  disabled?: boolean
}

export interface RegionEvent {
  /** The region's static data from MapRegionData */
  region: MapRegionData
  /** The native React synthetic event */
  nativeEvent:
    | MouseEvent<SVGPathElement>
    | TouchEvent<SVGPathElement>
    | FocusEvent<SVGPathElement>
    | KeyboardEvent<SVGPathElement>
}

export interface MarkerEvent {
  /** The marker's id */
  id: string
  /** The native React synthetic event */
  nativeEvent:
    | MouseEvent<SVGGElement>
    | TouchEvent<SVGGElement>
    | FocusEvent<SVGGElement>
    | KeyboardEvent<SVGGElement>
}

export interface RegionGroup {
  id: string
  name: string
  regionIds: string[]
  className?: string
  tooltipContent?: ReactNode
  metadata?: Record<string, unknown>
}

export interface GroupEvent {
  group: RegionGroup
  triggerRegion: MapRegionData
  nativeEvent: RegionEvent['nativeEvent']
}

export interface RegionOverride {
  id: string
  /** Override display name (e.g. for localization) */
  name?: string
  /** Override abbreviation label */
  abbreviation?: string
  /** Override label X position */
  labelX?: number
  /** Override label Y position */
  labelY?: number
  /** Attach arbitrary metadata */
  metadata?: Record<string, unknown>
  /** Extra CSS classes for fill/stroke */
  className?: string
  /** Extra CSS classes for the abbreviation label */
  labelClassName?: string
  /** Custom tooltip content */
  tooltipContent?: ReactNode
  /** Disable interaction */
  disabled?: boolean
}
