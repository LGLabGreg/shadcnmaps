'use client'

import { useEffect, useId, useRef } from 'react'

import { useMapContext } from './map-context'
import type { MapRegionData } from './types'

export interface MapListboxProps {
  regions: MapRegionData[]
  disabledRegions: Set<string>
  label: string
  onSelect: (region: MapRegionData) => void
}

export function MapListbox({
  regions,
  disabledRegions,
  label,
  onSelect,
}: MapListboxProps) {
  const { selectedRegion, setSelectedRegion, focusedRegion, setFocusedRegion } =
    useMapContext()
  const typeaheadRef = useRef('')
  const typeaheadTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const optionRefs = useRef(new Map<string, HTMLDivElement>())
  const listboxRef = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    return () => {
      if (typeaheadTimer.current) clearTimeout(typeaheadTimer.current)
    }
  }, [])

  const activeRegions = regions.filter((r) => !disabledRegions.has(r.id))
  const focusedIndex = activeRegions.findIndex((r) => r.id === focusedRegion)

  // The option that should be tabbable (tabIndex=0)
  const focusableId =
    focusedRegion && !disabledRegions.has(focusedRegion)
      ? focusedRegion
      : selectedRegion && !disabledRegions.has(selectedRegion)
        ? selectedRegion
        : activeRegions[0]?.id

  // Move DOM focus when focusedRegion changes
  useEffect(() => {
    if (!focusedRegion) return
    const el = optionRefs.current.get(focusedRegion)
    if (el && document.activeElement !== el) {
      el.focus()
    }
  }, [focusedRegion])

  // If focusedRegion becomes disabled, move to nearest active region
  useEffect(() => {
    if (!focusedRegion) return
    if (!disabledRegions.has(focusedRegion)) return

    // Find nearest active region
    const allIndex = regions.findIndex((r) => r.id === focusedRegion)
    if (allIndex < 0) {
      setFocusedRegion(activeRegions[0]?.id ?? null)
      return
    }

    // Search forward then backward for nearest active
    for (let offset = 1; offset < regions.length; offset++) {
      const fwd = regions[(allIndex + offset) % regions.length]
      if (fwd && !disabledRegions.has(fwd.id)) {
        setFocusedRegion(fwd.id)
        return
      }
    }
    setFocusedRegion(null)
  }, [focusedRegion, disabledRegions, regions, activeRegions, setFocusedRegion])

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
        setSelectedRegion((prev) => (prev === region.id ? null : region.id))
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

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    // Only clear focus when focus leaves the listbox entirely
    if (
      !listboxRef.current ||
      !event.relatedTarget ||
      !listboxRef.current.contains(event.relatedTarget as Node)
    ) {
      setFocusedRegion(null)
    }
  }

  return (
    <div
      ref={listboxRef}
      data-slot='map-listbox'
      role='listbox'
      aria-label={label}
      tabIndex={-1}
      className='sr-only'
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
    >
      {regions.map((region) => {
        const isDisabled = disabledRegions.has(region.id)
        return (
          <div
            key={region.id}
            id={`${id}-${region.id}`}
            ref={(el) => {
              if (el) {
                optionRefs.current.set(region.id, el)
              } else {
                optionRefs.current.delete(region.id)
              }
            }}
            role='option'
            aria-selected={selectedRegion === region.id}
            aria-disabled={isDisabled || undefined}
            tabIndex={
              isDisabled ? undefined : region.id === focusableId ? 0 : -1
            }
            onFocus={isDisabled ? undefined : () => setFocusedRegion(region.id)}
          >
            {region.name}
          </div>
        )
      })}
    </div>
  )
}
