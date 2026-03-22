'use client'

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'

import type { ZoomConfig, ZoomState } from './types'

export interface TooltipState {
  visible: boolean
  content: ReactNode | null
  position: { x: number; y: number } | null
}

const DEFAULT_ZOOM_STATE: ZoomState = {
  scale: 1,
  translateX: 0,
  translateY: 0,
}

const DEFAULT_ZOOM_CONFIG: ZoomConfig = {
  minZoom: 1,
  maxZoom: 8,
  zoomStep: 0.5,
  panStep: 50,
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
  zoomState: ZoomState
  setZoomState: Dispatch<SetStateAction<ZoomState>>
  zoomConfig: ZoomConfig
  zoomIn: () => void
  zoomOut: () => void
  resetZoom: () => void
  containerRef: RefObject<HTMLDivElement | null>
}

const MapContext = createContext<MapContextValue | null>(null)

interface MapProviderProps {
  children: ReactNode
  selectedRegion?: string | null
  zoomConfig?: Partial<ZoomConfig>
  viewBox?: { x: number; y: number; width: number; height: number }
}

function zoomTowardCenter(
  prev: ZoomState,
  newScale: number,
  viewBox: { x: number; y: number; width: number; height: number }
): ZoomState {
  const cx = viewBox.x + viewBox.width / 2
  const cy = viewBox.y + viewBox.height / 2
  const scaleRatio = newScale / prev.scale
  return {
    scale: newScale,
    translateX: cx - scaleRatio * (cx - prev.translateX),
    translateY: cy - scaleRatio * (cy - prev.translateY),
  }
}

export function MapProvider({
  children,
  selectedRegion: selectedRegionProp,
  zoomConfig: zoomConfigProp,
  viewBox,
}: MapProviderProps) {
  const isControlled = selectedRegionProp !== undefined
  const [uncontrolledRegion, setUncontrolledRegion] = useState<string | null>(
    null
  )
  const selectedRegion = isControlled ? selectedRegionProp : uncontrolledRegion
  const noop = useCallback<
    Dispatch<SetStateAction<string | null>>
  >(() => {}, [])
  const setSelectedRegion = isControlled ? noop : setUncontrolledRegion
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)
  const [focusedRegion, setFocusedRegion] = useState<string | null>(null)
  const [tooltipState, setTooltipState] = useState<TooltipState>({
    visible: false,
    content: null,
    position: null,
  })
  const [zoomState, setZoomState] = useState<ZoomState>(DEFAULT_ZOOM_STATE)
  const containerRef = useRef<HTMLDivElement>(null)

  const zoomConfig = useMemo<ZoomConfig>(
    () => ({ ...DEFAULT_ZOOM_CONFIG, ...zoomConfigProp }),
    [zoomConfigProp]
  )

  const zoomIn = useCallback(() => {
    setZoomState((prev) => {
      const newScale = Math.min(
        prev.scale + zoomConfig.zoomStep,
        zoomConfig.maxZoom
      )
      if (!viewBox || newScale === prev.scale)
        return { ...prev, scale: newScale }
      return zoomTowardCenter(prev, newScale, viewBox)
    })
  }, [zoomConfig, viewBox])

  const zoomOut = useCallback(() => {
    setZoomState((prev) => {
      const newScale = Math.max(
        prev.scale - zoomConfig.zoomStep,
        zoomConfig.minZoom
      )
      if (newScale === prev.scale) return prev
      // Auto-center when fully zoomed out
      if (newScale === zoomConfig.minZoom) {
        return { scale: newScale, translateX: 0, translateY: 0 }
      }
      if (!viewBox) return { ...prev, scale: newScale }
      return zoomTowardCenter(prev, newScale, viewBox)
    })
  }, [zoomConfig, viewBox])

  const resetZoom = useCallback(() => {
    setZoomState(DEFAULT_ZOOM_STATE)
  }, [])

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
      zoomState,
      setZoomState,
      zoomConfig,
      zoomIn,
      zoomOut,
      resetZoom,
      containerRef,
    }),
    [
      focusedRegion,
      hoveredRegion,
      selectedRegion,
      setSelectedRegion,
      tooltipState,
      zoomState,
      zoomConfig,
      zoomIn,
      zoomOut,
      resetZoom,
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
