'use client'

import { cn } from '@/lib/utils'
import type { KeyboardEvent, ReactNode } from 'react'

import { useMapContext } from './map-context'
import type { MapRegionData, RegionEvent } from './types'

export interface MapRegionProps extends MapRegionData {
  selected?: boolean
  hovered?: boolean
  disabled?: boolean
  className?: string
  tooltipContent?: ReactNode
  disableTooltip?: boolean
  onClick?: (event: RegionEvent) => void
  onEnter?: (event: RegionEvent) => void
  onLeave?: (event: RegionEvent) => void
  onMove?: (event: RegionEvent) => void
}

export function MapRegion({
  id,
  path,
  name,
  abbreviation,
  labelX,
  labelY,
  metadata,
  selected,
  hovered,
  disabled,
  className,
  onClick,
  onEnter,
  onLeave,
  onMove,
}: MapRegionProps) {
  const { hoveredRegion, selectedRegion, setHoveredRegion } = useMapContext()

  const isSelected = selected ?? selectedRegion === id
  const isHovered = hovered ?? hoveredRegion === id

  const regionData: MapRegionData = {
    id,
    path,
    name,
    abbreviation,
    labelX,
    labelY,
    metadata,
  }

  const handleKeyDown = (event: KeyboardEvent<SVGPathElement>) => {
    if (disabled) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.({
        region: regionData,
        nativeEvent: event as unknown as RegionEvent['nativeEvent'],
      })
    }
  }

  return (
    <>
      <path
        d={path}
        role='button'
        tabIndex={disabled ? -1 : 0}
        aria-label={name ?? id}
        aria-pressed={isSelected}
        aria-disabled={disabled || undefined}
        className={cn(
          'cursor-pointer fill-(--map-region) stroke-(--map-region-stroke) stroke-1 transition-colors duration-150 outline-none',
          isHovered &&
            'fill-(--map-region-hover) stroke-(--map-region-stroke-hover)',
          isSelected && 'fill-(--map-region-selected)',
          disabled &&
            'cursor-not-allowed fill-(--map-region-disabled) opacity-60',
          className
        )}
        onClick={(nativeEvent) => {
          if (disabled) {
            return
          }

          onClick?.({ region: regionData, nativeEvent })
        }}
        onMouseEnter={(nativeEvent) => {
          if (disabled) {
            return
          }

          setHoveredRegion(id)
          onEnter?.({ region: regionData, nativeEvent })
        }}
        onMouseLeave={(nativeEvent) => {
          if (disabled) {
            return
          }

          setHoveredRegion((current) => (current === id ? null : current))
          onLeave?.({ region: regionData, nativeEvent })
        }}
        onMouseMove={(nativeEvent) => {
          if (disabled) {
            return
          }

          onMove?.({ region: regionData, nativeEvent })
        }}
        onFocus={(nativeEvent) => {
          if (disabled) {
            return
          }

          setHoveredRegion(id)
          onEnter?.({
            region: regionData,
            nativeEvent: nativeEvent as unknown as RegionEvent['nativeEvent'],
          })
        }}
        onBlur={(nativeEvent) => {
          if (disabled) {
            return
          }

          setHoveredRegion((current) => (current === id ? null : current))
          onLeave?.({
            region: regionData,
            nativeEvent: nativeEvent as unknown as RegionEvent['nativeEvent'],
          })
        }}
        onKeyDown={handleKeyDown}
      />
      {abbreviation && labelX !== undefined && labelY !== undefined ? (
        <text
          x={labelX}
          y={labelY}
          aria-hidden='true'
          className={cn(
            'pointer-events-none fill-(--map-label) text-[10px] font-medium transition-colors duration-150 select-none',
            isHovered && 'fill-(--map-label-hover)',
            isSelected && 'fill-(--map-label-selected)'
          )}
          textAnchor='middle'
          dominantBaseline='middle'
        >
          {abbreviation}
        </text>
      ) : null}
    </>
  )
}
