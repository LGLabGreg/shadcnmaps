'use client'

import { cn } from '@/lib/utils'
import {
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'

import { MapProvider, useMapContext } from './map-context'
import { MapListbox } from './map-listbox'
import { MapMarker } from './map-marker'
import { MapRegion } from './map-region'
import { MapTooltip } from './map-tooltip'
import type {
  MapData,
  MapMarkerData,
  MapRegionData,
  MarkerEvent,
  RegionEvent,
  RegionOverride,
  ZoomConfig,
} from './types'

export interface MapProps {
  data: MapData
  regions?: RegionOverride[]
  markers?: MapMarkerData[]
  disabledRegions?: string[]
  onRegionClick?: (event: RegionEvent) => void
  onRegionEnter?: (event: RegionEvent) => void
  onRegionLeave?: (event: RegionEvent) => void
  onMarkerClick?: (event: MarkerEvent) => void
  showLabels?: boolean
  showTooltips?: boolean
  renderTooltip?: (region: MapRegionData) => ReactNode
  className?: string
  children?: ReactNode
  'aria-label'?: string
  enableZoom?: boolean
  zoomConfig?: Partial<ZoomConfig>
  controls?: ReactNode
}

function getPointerPosition(
  nativeEvent: unknown
): { x: number; y: number } | null {
  if (
    typeof nativeEvent === 'object' &&
    nativeEvent !== null &&
    'clientX' in nativeEvent &&
    'clientY' in nativeEvent &&
    typeof nativeEvent.clientX === 'number' &&
    typeof nativeEvent.clientY === 'number'
  ) {
    return { x: nativeEvent.clientX, y: nativeEvent.clientY }
  }

  const maybeTouches = (
    nativeEvent as {
      touches?: {
        length: number
        item?: (index: number) => unknown
        [index: number]: unknown
      }
    }
  ).touches

  if (maybeTouches && maybeTouches.length > 0) {
    const touch =
      typeof maybeTouches.item === 'function'
        ? maybeTouches.item(0)
        : maybeTouches[0]
    if (
      typeof touch === 'object' &&
      touch !== null &&
      'clientX' in touch &&
      'clientY' in touch &&
      typeof touch.clientX === 'number' &&
      typeof touch.clientY === 'number'
    ) {
      return { x: touch.clientX, y: touch.clientY }
    }
  }

  return null
}

function parseViewBox(viewBox: string) {
  const parts = viewBox.split(/\s+/).map(Number)
  return { x: parts[0], y: parts[1], width: parts[2], height: parts[3] }
}

function MapInner({
  data,
  regions,
  markers,
  disabledRegions,
  onRegionClick,
  onRegionEnter,
  onRegionLeave,
  onMarkerClick,
  showLabels = true,
  showTooltips = true,
  renderTooltip,
  className,
  children,
  'aria-label': ariaLabel,
  enableZoom = false,
}: MapProps) {
  const {
    selectedRegion,
    setSelectedRegion,
    focusedRegion,
    setTooltipState,
    zoomState,
    setZoomState,
    zoomConfig,
    zoomIn,
    zoomOut,
    resetZoom,
  } = useMapContext()
  const descId = useId()
  const [announcement, setAnnouncement] = useState('')
  const svgRef = useRef<SVGSVGElement>(null)
  const isPanningRef = useRef(false)
  const [isGesture, setIsGesture] = useState(false)
  const dragStartRef = useRef<{
    x: number
    y: number
    tx: number
    ty: number
  } | null>(null)
  const pinchStartRef = useRef<{ dist: number; scale: number } | null>(null)

  const regionOverrides = useMemo(() => {
    return new Map(regions?.map((region) => [region.id, region]) ?? [])
  }, [regions])

  const disabledRegionSet = useMemo(() => {
    return new Set(disabledRegions ?? [])
  }, [disabledRegions])

  const mergedRegions = useMemo(() => {
    return data.regions.map((baseRegion) => {
      const override = regionOverrides.get(baseRegion.id)
      return {
        ...baseRegion,
        ...override,
      }
    })
  }, [data.regions, regionOverrides])

  const mapLabel = ariaLabel ?? data.name

  const viewBox = useMemo(() => parseViewBox(data.viewBox), [data.viewBox])

  const clampTranslate = useCallback(
    (tx: number, ty: number, scale: number) => {
      const maxPanX = (viewBox.width * (scale - 1)) / 2 + viewBox.width * 0.5
      const maxPanY = (viewBox.height * (scale - 1)) / 2 + viewBox.height * 0.5
      return {
        tx: Math.max(-maxPanX, Math.min(maxPanX, tx)),
        ty: Math.max(-maxPanY, Math.min(maxPanY, ty)),
      }
    },
    [viewBox]
  )

  // Wheel zoom
  useEffect(() => {
    if (!enableZoom) return
    const svg = svgRef.current
    if (!svg) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? -zoomConfig.zoomStep : zoomConfig.zoomStep

      setZoomState((prev) => {
        const newScale = Math.max(
          zoomConfig.minZoom,
          Math.min(zoomConfig.maxZoom, prev.scale + delta)
        )
        if (newScale === prev.scale) return prev

        // Zoom toward cursor position
        const rect = svg.getBoundingClientRect()
        const cursorX = e.clientX - rect.left
        const cursorY = e.clientY - rect.top
        const svgX = (cursorX / rect.width) * viewBox.width + viewBox.x
        const svgY = (cursorY / rect.height) * viewBox.height + viewBox.y

        const scaleRatio = newScale / prev.scale
        const newTx = svgX - scaleRatio * (svgX - prev.translateX)
        const newTy = svgY - scaleRatio * (svgY - prev.translateY)
        const clamped = clampTranslate(newTx, newTy, newScale)

        return {
          scale: newScale,
          translateX: clamped.tx,
          translateY: clamped.ty,
        }
      })
    }

    svg.addEventListener('wheel', handleWheel, { passive: false })
    return () => svg.removeEventListener('wheel', handleWheel)
  }, [enableZoom, zoomConfig, setZoomState, viewBox, clampTranslate])

  // Click-and-drag pan — use document-level move/up so we don't steal
  // pointer events from child <path> elements (setPointerCapture would
  // prevent region clicks from firing).
  const handlePointerDown = useCallback(
    (e: ReactPointerEvent<SVGSVGElement>) => {
      if (!enableZoom || e.button !== 0) return
      // Only start drag from the SVG background or zoom layer, not from regions
      const target = e.target as Element
      if (target.closest('[data-slot="map-region"]')) {
        // Store start position so we can detect drag even from a region
        isPanningRef.current = false
        setIsGesture(true)
        dragStartRef.current = {
          x: e.clientX,
          y: e.clientY,
          tx: zoomState.translateX,
          ty: zoomState.translateY,
        }
        return
      }
      isPanningRef.current = false
      setIsGesture(true)
      dragStartRef.current = {
        x: e.clientX,
        y: e.clientY,
        tx: zoomState.translateX,
        ty: zoomState.translateY,
      }
    },
    [enableZoom, zoomState.translateX, zoomState.translateY]
  )

  // Document-level pointermove/pointerup for drag panning
  useEffect(() => {
    if (!enableZoom) return

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragStartRef.current) return
      const dx = e.clientX - dragStartRef.current.x
      const dy = e.clientY - dragStartRef.current.y

      // Movement threshold to distinguish from click
      if (!isPanningRef.current && Math.hypot(dx, dy) < 3) return
      isPanningRef.current = true

      const svg = svgRef.current
      if (!svg) return
      const rect = svg.getBoundingClientRect()
      const svgDx = (dx / rect.width) * viewBox.width * zoomState.scale
      const svgDy = (dy / rect.height) * viewBox.height * zoomState.scale

      const newTx = dragStartRef.current.tx + svgDx
      const newTy = dragStartRef.current.ty + svgDy
      const clamped = clampTranslate(newTx, newTy, zoomState.scale)

      setZoomState((prev) => ({
        ...prev,
        translateX: clamped.tx,
        translateY: clamped.ty,
      }))
    }

    const handlePointerUp = () => {
      if (!dragStartRef.current) return
      dragStartRef.current = null
      // Delay clearing so click handlers can check isPanning
      requestAnimationFrame(() => {
        isPanningRef.current = false
        setIsGesture(false)
      })
    }

    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerup', handlePointerUp)
    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerup', handlePointerUp)
    }
  }, [enableZoom, viewBox, zoomState.scale, setZoomState, clampTranslate])

  // Touch pinch-to-zoom
  useEffect(() => {
    if (!enableZoom) return
    const svg = svgRef.current
    if (!svg) return

    const getTouchDist = (e: TouchEvent) => {
      if (e.touches.length < 2) return null
      const dx = e.touches[0].clientX - e.touches[1].clientX
      const dy = e.touches[0].clientY - e.touches[1].clientY
      return Math.hypot(dx, dy)
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault()
        const dist = getTouchDist(e)
        if (dist !== null) {
          pinchStartRef.current = { dist, scale: zoomState.scale }
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchStartRef.current) {
        e.preventDefault()
        const dist = getTouchDist(e)
        if (dist !== null) {
          const scaleRatio = dist / pinchStartRef.current.dist
          const newScale = Math.max(
            zoomConfig.minZoom,
            Math.min(
              zoomConfig.maxZoom,
              pinchStartRef.current.scale * scaleRatio
            )
          )
          setZoomState((prev) => ({ ...prev, scale: newScale }))
        }
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) {
        pinchStartRef.current = null
      }
    }

    svg.addEventListener('touchstart', handleTouchStart, { passive: false })
    svg.addEventListener('touchmove', handleTouchMove, { passive: false })
    svg.addEventListener('touchend', handleTouchEnd)
    return () => {
      svg.removeEventListener('touchstart', handleTouchStart)
      svg.removeEventListener('touchmove', handleTouchMove)
      svg.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enableZoom, zoomConfig, zoomState.scale, setZoomState])

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<SVGSVGElement>) => {
      if (!enableZoom) return
      switch (e.key) {
        case '+':
        case '=':
          e.preventDefault()
          zoomIn()
          break
        case '-':
          e.preventDefault()
          zoomOut()
          break
        case '0':
          e.preventDefault()
          resetZoom()
          break
      }
    },
    [enableZoom, zoomIn, zoomOut, resetZoom]
  )

  const shouldSuppressClick = useCallback(() => {
    return enableZoom && isPanningRef.current
  }, [enableZoom])

  const svgContent = (
    <>
      {mergedRegions.map((region) => {
        const disabled = region.disabled || disabledRegionSet.has(region.id)
        const tooltipContent =
          renderTooltip?.(region) ?? region.tooltipContent ?? region.name

        return (
          <MapRegion
            key={region.id}
            id={region.id}
            name={region.name}
            path={region.path}
            abbreviation={showLabels ? region.abbreviation : undefined}
            labelX={showLabels ? region.labelX : undefined}
            labelY={showLabels ? region.labelY : undefined}
            metadata={region.metadata}
            className={region.className}
            labelClassName={region.labelClassName}
            disabled={disabled}
            onClick={(event) => {
              if (shouldSuppressClick()) return
              const isCurrentlySelected = selectedRegion === region.id
              setSelectedRegion(isCurrentlySelected ? null : region.id)
              setAnnouncement(
                isCurrentlySelected
                  ? `${region.name} deselected`
                  : `${region.name} selected`
              )
              onRegionClick?.(event)

              if (showTooltips) {
                setTooltipState({
                  visible: true,
                  content: tooltipContent,
                  position: getPointerPosition(event.nativeEvent),
                })
              }
            }}
            onEnter={(event) => {
              onRegionEnter?.(event)
              if (showTooltips) {
                setTooltipState((current) => ({
                  visible: true,
                  content: tooltipContent,
                  position:
                    getPointerPosition(event.nativeEvent) ?? current.position,
                }))
              }
            }}
            onMove={(event) => {
              if (!showTooltips) {
                return
              }

              setTooltipState((current) => ({
                ...current,
                visible: true,
                content: tooltipContent,
                position:
                  getPointerPosition(event.nativeEvent) ?? current.position,
              }))
            }}
            onLeave={(event) => {
              onRegionLeave?.(event)

              if (showTooltips) {
                setTooltipState((current) => ({ ...current, visible: false }))
              }
            }}
          />
        )
      })}
      {markers?.map((marker) => (
        <MapMarker
          key={marker.id}
          id={marker.id}
          x={marker.x}
          y={marker.y}
          content={marker.content}
          label={marker.label}
          disabled={marker.disabled}
          onClick={(event) => {
            if (shouldSuppressClick()) return
            onMarkerClick?.(event)

            if (showTooltips && marker.tooltipContent) {
              setTooltipState({
                visible: true,
                content: marker.tooltipContent,
                position: getPointerPosition(event.nativeEvent),
              })
            }
          }}
          onEnter={(event) => {
            if (showTooltips && marker.tooltipContent) {
              setTooltipState({
                visible: true,
                content: marker.tooltipContent,
                position: getPointerPosition(event.nativeEvent),
              })
            }
          }}
          onMove={(event) => {
            if (!showTooltips || !marker.tooltipContent) {
              return
            }

            setTooltipState((current) => ({
              ...current,
              visible: true,
              content: marker.tooltipContent,
              position:
                getPointerPosition(event.nativeEvent) ?? current.position,
            }))
          }}
          onLeave={() => {
            if (showTooltips) {
              setTooltipState((current) => ({ ...current, visible: false }))
            }
          }}
        />
      ))}
      {children}
      <FocusRingOverlay focusedRegion={focusedRegion} regions={mergedRegions} />
    </>
  )

  return (
    <>
      <svg
        ref={svgRef}
        data-slot='map'
        role='group'
        aria-label={mapLabel}
        aria-describedby={descId}
        viewBox={data.viewBox}
        className={cn('h-auto w-full', className)}
        style={
          enableZoom
            ? {
                touchAction: 'none',
                cursor: zoomState.scale > 1 ? 'grab' : undefined,
              }
            : undefined
        }
        onPointerDown={enableZoom ? handlePointerDown : undefined}
        onKeyDown={enableZoom ? handleKeyDown : undefined}
        onPointerLeave={() => {
          if (showTooltips) {
            setTooltipState((current) => ({ ...current, visible: false }))
          }
        }}
      >
        <desc id={descId}>
          Interactive map. Tab to focus, arrow keys to navigate between regions,
          Enter or Space to select, Escape to clear.
        </desc>
        {enableZoom ? (
          <g
            data-slot='map-zoom-layer'
            transform={`translate(${zoomState.translateX},${zoomState.translateY}) scale(${zoomState.scale})`}
            style={{
              transition: isGesture ? 'none' : 'transform 200ms ease-out',
              willChange: 'transform',
            }}
          >
            {svgContent}
          </g>
        ) : (
          svgContent
        )}
      </svg>
      <MapListbox
        regions={mergedRegions}
        disabledRegions={disabledRegionSet}
        label={mapLabel}
        onSelect={(region) => {
          const isCurrentlySelected = selectedRegion === region.id
          setAnnouncement(
            isCurrentlySelected
              ? `${region.name} deselected`
              : `${region.name} selected`
          )
          onRegionClick?.({ region, nativeEvent: null })
        }}
      />
      <div
        role='status'
        aria-live='polite'
        aria-atomic='true'
        className='sr-only'
      >
        {announcement}
      </div>
      {showTooltips ? <MapTooltipContainer /> : null}
    </>
  )
}

function FocusRingOverlay({
  focusedRegion,
  regions,
}: {
  focusedRegion: string | null
  regions: MapRegionData[]
}) {
  if (!focusedRegion) return null
  const region = regions.find((r) => r.id === focusedRegion)
  if (!region) return null

  return (
    <path
      data-slot='map-focus-ring'
      d={region.path}
      aria-hidden='true'
      className='pointer-events-none fill-none stroke-map-region-focus-ring stroke-2'
    />
  )
}

function MapTooltipContainer() {
  const { tooltipState } = useMapContext()

  if (!tooltipState.content) {
    return null
  }

  return (
    <MapTooltip
      visible={tooltipState.visible}
      content={tooltipState.content}
      position={tooltipState.position}
      className='shadcnmaps-tooltip'
    />
  )
}

function MapRoot({ enableZoom, zoomConfig, controls, ...props }: MapProps) {
  const viewBox = useMemo(
    () => parseViewBox(props.data.viewBox),
    [props.data.viewBox]
  )
  return (
    <MapProvider zoomConfig={zoomConfig} viewBox={viewBox}>
      <div data-slot='map-container' className='relative'>
        <MapInner enableZoom={enableZoom} {...props} />
        {controls}
      </div>
    </MapProvider>
  )
}

export { MapRoot as Map }
