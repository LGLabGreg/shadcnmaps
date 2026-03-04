'use client'

import { useId, useRef } from 'react'

import { useMapContext } from './map-context'
import type { MapRegionData, RegionGroup } from './types'

export interface MapListboxProps {
  regions: MapRegionData[]
  disabledRegions: Set<string>
  groups?: RegionGroup[]
  regionToGroupId: globalThis.Map<string, string>
  label: string
  onSelect: (region: MapRegionData) => void
}

export function MapListbox({
  regions,
  disabledRegions,
  regionToGroupId,
  label,
  onSelect,
}: MapListboxProps) {
  const { selectedRegion, setSelectedRegion, focusedRegion, setFocusedRegion } =
    useMapContext()
  const typeaheadRef = useRef('')
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const id = useId()

  const activeRegions = regions.filter((r) => !disabledRegions.has(r.id))
  const focusedIndex = activeRegions.findIndex((r) => r.id === focusedRegion)

  function moveTo(index: number) {
    const region = activeRegions[index]
    if (region) setFocusedRegion(region.id)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const idx = focusedIndex < 0 ? 0 : focusedIndex

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault()
        moveTo(focusedIndex < activeRegions.length - 1 ? focusedIndex + 1 : 0)
        break

      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault()
        moveTo(focusedIndex > 0 ? focusedIndex - 1 : activeRegions.length - 1)
        break

      case 'Home':
        event.preventDefault()
        moveTo(0)
        break

      case 'End':
        event.preventDefault()
        moveTo(activeRegions.length - 1)
        break

      case 'Enter':
      case ' ': {
        event.preventDefault()
        const region = activeRegions[idx]
        if (!region) break
        const myGroupId = regionToGroupId.get(region.id)
        const selectedGroupId = regionToGroupId.get(selectedRegion ?? '')
        const isCurrentlySelected =
          selectedRegion === region.id ||
          (myGroupId != null && myGroupId === selectedGroupId)
        setSelectedRegion(isCurrentlySelected ? null : region.id)
        onSelect(region)
        break
      }

      case 'Escape':
        event.preventDefault()
        setSelectedRegion(null)
        break

      default:
        if (event.key.length === 1) {
          typeaheadRef.current += event.key.toLowerCase()
          if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current)
          typeaheadTimer.current = setTimeout(() => {
            typeaheadRef.current = ''
          }, 500)
          const query = typeaheadRef.current
          const match = activeRegions.findIndex((r) =>
            r.name.toLowerCase().startsWith(query)
          )
          if (match >= 0) moveTo(match)
        }
    }
  }

  return (
    <div
      data-slot='map-listbox'
      role='listbox'
      aria-label={label}
      aria-activedescendant={
        focusedRegion ? `${id}-${focusedRegion}` : undefined
      }
      tabIndex={0}
      className='sr-only'
      onKeyDown={handleKeyDown}
      onFocus={() => {
        if (!focusedRegion) {
          const init =
            selectedRegion && !disabledRegions.has(selectedRegion)
              ? selectedRegion
              : activeRegions[0]?.id
          if (init) setFocusedRegion(init)
        }
      }}
      onBlur={() => setFocusedRegion(null)}
    >
      {regions.map((region) => {
        const myGroupId = regionToGroupId.get(region.id)
        const selectedGroupId = regionToGroupId.get(selectedRegion ?? '')
        const isSelected =
          selectedRegion === region.id ||
          (myGroupId != null && myGroupId === selectedGroupId)
        return (
          <div
            key={region.id}
            id={`${id}-${region.id}`}
            role='option'
            aria-selected={isSelected}
            aria-disabled={disabledRegions.has(region.id) || undefined}
          >
            {region.name}
          </div>
        )
      })}
    </div>
  )
}
