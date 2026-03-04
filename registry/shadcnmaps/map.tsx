'use client'

import { cn } from '@/lib/utils'
import { type ReactNode, useId, useMemo, useState } from 'react'

import { MapProvider, useMapContext } from './map-context'
import { MapListbox } from './map-listbox'
import { MapMarker } from './map-marker'
import { MapRegion } from './map-region'
import { MapTooltip } from './map-tooltip'
import type {
  GroupEvent,
  MapData,
  MapMarkerData,
  MapRegionData,
  MarkerEvent,
  RegionEvent,
  RegionGroup,
  RegionOverride,
} from './types'

export interface MapProps {
  data: MapData
  regions?: RegionOverride[]
  markers?: MapMarkerData[]
  groups?: RegionGroup[]
  disabledRegions?: string[]
  onRegionClick?: (event: RegionEvent) => void
  onRegionEnter?: (event: RegionEvent) => void
  onRegionLeave?: (event: RegionEvent) => void
  onGroupClick?: (event: GroupEvent) => void
  onGroupEnter?: (event: GroupEvent) => void
  onGroupLeave?: (event: GroupEvent) => void
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

function MapInner({
  data,
  regions,
  markers,
  groups,
  disabledRegions,
  onRegionClick,
  onRegionEnter,
  onRegionLeave,
  onGroupClick,
  onGroupEnter,
  onGroupLeave,
  onMarkerClick,
  showLabels = true,
  showTooltips = true,
  renderTooltip,
  className,
  children,
  'aria-label': ariaLabel,
}: MapProps) {
  const {
    selectedRegion,
    setSelectedRegion,
    setHoveredRegion,
    focusedRegion,
    setTooltipState,
    regionToGroupId,
  } = useMapContext()
  const descId = useId()
  const [announcement, setAnnouncement] = useState('')

  const regionOverrides = useMemo(() => {
    return new globalThis.Map(
      regions?.map((region) => [region.id, region]) ?? []
    )
  }, [regions])

  const disabledRegionSet = useMemo(() => {
    return new Set(disabledRegions ?? [])
  }, [disabledRegions])

  const regionToGroup = useMemo(() => {
    const map = new globalThis.Map<string, RegionGroup>()
    if (groups) {
      for (const group of groups) {
        for (const regionId of group.regionIds) {
          map.set(regionId, group)
        }
      }
    }
    return map
  }, [groups])

  const mergedRegions = useMemo(() => {
    return data.regions.map((baseRegion) => {
      const override = regionOverrides.get(baseRegion.id)
      const group = regionToGroup.get(baseRegion.id)
      return {
        ...baseRegion,
        ...override,
        className: cn(group?.className, override?.className),
      }
    })
  }, [data.regions, regionOverrides, regionToGroup])

  const mapLabel = ariaLabel ?? data.name

  return (
    <>
      <svg
        data-slot='map'
        role='group'
        aria-label={mapLabel}
        aria-describedby={descId}
        viewBox={data.viewBox}
        className={cn('h-auto w-full', className)}
        onMouseLeave={() => {
          setHoveredRegion(null)
          if (showTooltips && !selectedRegion) {
            setTooltipState((current) => ({ ...current, visible: false }))
          }
        }}
      >
        <desc id={descId}>
          Interactive map. Tab to focus, arrow keys to navigate between regions,
          Enter or Space to select, Escape to clear.
        </desc>
        {mergedRegions.map((region) => {
          const disabled = region.disabled || disabledRegionSet.has(region.id)
          const group = regionToGroup.get(region.id)
          const tooltipContent =
            renderTooltip?.(region) ??
            region.tooltipContent ??
            group?.tooltipContent ??
            group?.name ??
            region.name

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
                const myGroupId = regionToGroupId.get(region.id)
                const selectedGroupId = regionToGroupId.get(
                  selectedRegion ?? ''
                )
                const isCurrentlySelected =
                  selectedRegion === region.id ||
                  (myGroupId != null && myGroupId === selectedGroupId)
                setSelectedRegion(isCurrentlySelected ? null : region.id)

                const label = group?.name ?? region.name
                setAnnouncement(
                  isCurrentlySelected
                    ? `${label} deselected`
                    : `${label} selected`
                )
                onRegionClick?.(event)
                if (group) {
                  onGroupClick?.({
                    group,
                    triggerRegion: region,
                    nativeEvent: event.nativeEvent,
                  })
                }

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
                if (group) {
                  onGroupEnter?.({
                    group,
                    triggerRegion: region,
                    nativeEvent: event.nativeEvent,
                  })
                }
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
                if (group) {
                  onGroupLeave?.({
                    group,
                    triggerRegion: region,
                    nativeEvent: event.nativeEvent,
                  })
                }

                if (showTooltips && selectedRegion !== region.id) {
                  setTooltipState((current) => ({
                    ...current,
                    visible: false,
                  }))
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
        <FocusRingOverlay
          focusedRegion={focusedRegion}
          regions={mergedRegions}
        />
      </svg>
      <MapListbox
        regions={mergedRegions}
        disabledRegions={disabledRegionSet}
        groups={groups}
        regionToGroupId={regionToGroupId}
        label={mapLabel}
        onSelect={(region) => {
          const myGroupId = regionToGroupId.get(region.id)
          const selectedGroupId = regionToGroupId.get(selectedRegion ?? '')
          const isCurrentlySelected =
            selectedRegion === region.id ||
            (myGroupId != null && myGroupId === selectedGroupId)
          const group = regionToGroup.get(region.id)
          const label = group?.name ?? region.name
          setAnnouncement(
            isCurrentlySelected ? `${label} deselected` : `${label} selected`
          )
          onRegionClick?.({
            region,
            nativeEvent: null as unknown as RegionEvent['nativeEvent'],
          })
          if (group) {
            onGroupClick?.({
              group,
              triggerRegion: region,
              nativeEvent: null as unknown as GroupEvent['nativeEvent'],
            })
          }
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

export function Map(props: MapProps) {
  return (
    <MapProvider groups={props.groups}>
      <MapInner {...props} />
    </MapProvider>
  )
}
