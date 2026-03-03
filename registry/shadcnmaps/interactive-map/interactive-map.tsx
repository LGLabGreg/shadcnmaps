'use client'

import { cn } from '@/lib/utils'
import { type ReactNode, useMemo } from 'react'

import { MapProvider, useMapContext } from './map-context'
import { MapMarker } from './map-marker'
import { MapRegion } from './map-region'
import { MapTooltip } from './map-tooltip'
import type {
  MapData,
  MapMarkerData,
  MapRegionData,
  MarkerEvent,
  RegionEvent,
} from './types'

type RegionOverride = Partial<MapRegionData> & {
  id: string
  className?: string
  tooltipContent?: ReactNode
  disabled?: boolean
}

export interface InteractiveMapProps {
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

function InteractiveMapInner({
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
}: InteractiveMapProps) {
  const { selectedRegion, setSelectedRegion, setTooltipState } = useMapContext()

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

  return (
    <div className='relative'>
      <svg
        role='group'
        aria-label={ariaLabel ?? data.name}
        viewBox={data.viewBox}
        className={cn('h-auto w-full', className)}
      >
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
              disabled={disabled}
              onClick={(event) => {
                setSelectedRegion((current) =>
                  current === region.id ? null : region.id
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
                  setTooltipState({
                    visible: true,
                    content: tooltipContent,
                    position: getPointerPosition(event.nativeEvent),
                  })
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

                if (showTooltips && selectedRegion !== region.id) {
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
            tooltipContent={marker.tooltipContent}
            label={marker.label}
            disabled={marker.disabled}
            onClick={(event) => {
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
      </svg>
      {showTooltips ? <MapTooltipContainer /> : null}
    </div>
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

export function InteractiveMap(props: InteractiveMapProps) {
  return (
    <MapProvider>
      <InteractiveMapInner {...props} />
    </MapProvider>
  )
}
