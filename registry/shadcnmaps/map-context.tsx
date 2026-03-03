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
}

const MapContext = createContext<MapContextValue | null>(null)

interface MapProviderProps {
  children: ReactNode
}

export function MapProvider({ children }: MapProviderProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [focusedRegion, setFocusedRegion] = useState<string | null>(null)
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    visible: false,
    content: null,
    position: null,
  })

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
    }),
    [focusedRegion, hoveredRegion, selectedRegion, tooltipState]
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
