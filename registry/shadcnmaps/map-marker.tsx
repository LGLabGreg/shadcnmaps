'use client'

import { cn } from '@/lib/utils'
import type { KeyboardEvent, ReactNode } from 'react'

import type { MarkerEvent } from './types'

export interface MapMarkerProps {
  id: string
  x: number
  y: number
  content: ReactNode
  tooltipContent?: ReactNode
  label?: string
  disabled?: boolean
  className?: string
  onClick?: (event: MarkerEvent) => void
  onEnter?: (event: MarkerEvent) => void
  onLeave?: (event: MarkerEvent) => void
  onMove?: (event: MarkerEvent) => void
}

export function MapMarker({
  id,
  x,
  y,
  content,
  label,
  disabled,
  className,
  onClick,
  onEnter,
  onLeave,
  onMove,
}: MapMarkerProps) {
  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (disabled) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick?.({
        id,
        nativeEvent: event as unknown as MarkerEvent['nativeEvent'],
      })
    }
  }

  return (
    <g
      transform={`translate(${x}, ${y})`}
      role='button'
      tabIndex={disabled ? -1 : 0}
      aria-label={label ?? `Map marker ${id}`}
      aria-disabled={disabled || undefined}
      className={cn(
        'cursor-pointer transition-transform duration-150 outline-none',
        disabled && 'cursor-not-allowed opacity-60',
        className
      )}
      onClick={(nativeEvent) => {
        if (disabled) {
          return
        }

        onClick?.({ id, nativeEvent })
      }}
      onMouseEnter={(nativeEvent) => {
        if (disabled) {
          return
        }

        onEnter?.({ id, nativeEvent })
      }}
      onMouseLeave={(nativeEvent) => {
        if (disabled) {
          return
        }

        onLeave?.({ id, nativeEvent })
      }}
      onMouseMove={(nativeEvent) => {
        if (disabled) {
          return
        }

        onMove?.({ id, nativeEvent })
      }}
      onFocus={(nativeEvent) => {
        if (disabled) {
          return
        }

        onEnter?.({
          id,
          nativeEvent: nativeEvent as unknown as MarkerEvent['nativeEvent'],
        })
      }}
      onBlur={(nativeEvent) => {
        if (disabled) {
          return
        }

        onLeave?.({
          id,
          nativeEvent: nativeEvent as unknown as MarkerEvent['nativeEvent'],
        })
      }}
      onKeyDown={handleKeyDown}
    >
      {content}
    </g>
  )
}
