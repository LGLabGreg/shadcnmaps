'use client'

import { cn } from '@/lib/utils'
import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface MapTooltipProps {
  visible: boolean
  content: ReactNode
  position?: { x: number; y: number } | null
  className?: string
}

export function MapTooltip({
  visible,
  content,
  position,
  className,
}: MapTooltipProps) {
  if (typeof document === 'undefined') {
    return null
  }

  const left = position?.x ?? 0
  const top = position?.y ?? 0

  return createPortal(
    <div
      data-slot='map-tooltip'
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none fixed z-50 -translate-y-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-xl transition-[opacity,left,top] duration-150 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        left,
        top: top - 10,
        transform: 'translate(-50%, 0)',
      }}
    >
      {content}
    </div>,
    document.body
  )
}
