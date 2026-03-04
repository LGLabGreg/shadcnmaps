'use client'

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

import type { RegionGroup } from './types'

export interface TooltipState {
  visible: boolean
  content: ReactNode | null
  position: { x: number; y: number } | null
}

interface MapContextValue {
  selectedRegion: string | null
  setSelectedRegion: Dispatch<SetStateAction<string | null>>
  hoveredRegion: string | null
  setHoveredRegion: Dispatch<SetStateAction<string | null>>
  focusedRegion: string | null
  setFocusedRegion: Dispatch<SetStateAction<string | null>>
  tooltipState: TooltipState
  setTooltipState: Dispatch<SetStateAction<TooltipState>>
  regionToGroupId: globalThis.Map<string, string>
  groupToRegionIds: globalThis.Map<string, string[]>
}

const MapContext = createContext<MapContextValue | null>(null)

interface MapProviderProps {
  children: ReactNode
  groups?: RegionGroup[]
}

export function MapProvider({ children, groups }: MapProviderProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [focusedRegion, setFocusedRegion] = useState<string | null>(null)
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    visible: false,
    content: null,
    position: null,
  })

  const { regionToGroupId, groupToRegionIds } = useMemo(() => {
    const r2g = new globalThis.Map<string, string>()
    const g2r = new globalThis.Map<string, string[]>()
    if (groups) {
      for (const group of groups) {
        g2r.set(group.id, group.regionIds)
        for (const regionId of group.regionIds) {
          r2g.set(regionId, group.id)
        }
      }
    }
    return { regionToGroupId: r2g, groupToRegionIds: g2r }
  }, [groups])

  const value = useMemo<MapContextValue>(
    () => ({
      selectedRegion,
      setSelectedRegion,
      hoveredRegion,
      setHoveredRegion,
      focusedRegion,
      setFocusedRegion,
      tooltipState,
      setTooltipState,
      regionToGroupId,
      groupToRegionIds,
    }),
    [
      focusedRegion,
      hoveredRegion,
      selectedRegion,
      tooltipState,
      regionToGroupId,
      groupToRegionIds,
    ]
  )

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export function useMapContext() {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider.')
  }

  return context
}
