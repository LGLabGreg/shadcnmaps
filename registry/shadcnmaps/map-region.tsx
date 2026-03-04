'use client'

import { cn } from '@/lib/utils'

import { useMapContext } from './map-context'
import type { MapRegionData, RegionEvent } from './types'

export interface MapRegionProps extends MapRegionData {
  selected?: boolean
  hovered?: boolean
  disabled?: boolean
  className?: string
  labelClassName?: string
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
  labelClassName,
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

  return (
    <>
      <path
        data-slot='map-region'
        d={path}
        role='button'
        tabIndex={-1}
        aria-label={name ?? id}
        aria-pressed={isSelected}
        aria-disabled={disabled || undefined}
        className={cn(
          'cursor-pointer fill-map-region stroke-map-region-stroke stroke-1 transition-colors duration-150 outline-none',
          isHovered && 'fill-map-region-hover stroke-map-region-stroke-hover',
          isSelected && 'fill-map-region-selected',
          disabled && 'cursor-default fill-map-region-disabled opacity-60',
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
      />
      {abbreviation && labelX !== undefined && labelY !== undefined ? (
        <text
          data-slot='map-region-label'
          x={labelX}
          y={labelY}
          aria-hidden='true'
          className={cn(
            'pointer-events-none fill-map-label text-[10px] font-medium transition-colors duration-150 select-none',
            isHovered && 'fill-map-label-hover',
            isSelected && 'fill-map-label-selected',
            labelClassName
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
