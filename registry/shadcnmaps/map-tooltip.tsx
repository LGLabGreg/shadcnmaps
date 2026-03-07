'use client'

import { cn } from '@/lib/utils'
import { type ReactNode, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'

export interface MapTooltipProps {
  visible: boolean
  content: ReactNode
  position?: { x: number; y: number } | null
  className?: string
}

const OFFSET_Y = 10

export function MapTooltip({
  visible,
  content,
  position,
  className,
}: MapTooltipProps) {
  const ref = useRef<HTMLDivElement>(null)

  const clamp = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node
      if (!node) return
      const rect = node.getBoundingClientRect()
      const clampedLeft = Math.min(
        Math.max(rect.width / 2, node.offsetLeft),
        window.innerWidth - rect.width / 2
      )
      if (clampedLeft !== node.offsetLeft) {
        node.style.left = `${clampedLeft}px`
      }
      if (rect.top < 0) {
        node.style.transform = 'translate(-50%, 0)'
        node.style.top = `${(position?.y ?? 0) + OFFSET_Y}px`
      }
    },
    [position]
  )

  if (typeof document === 'undefined' || !position) {
    return null
  }

  return createPortal(
    <div
      ref={clamp}
      data-slot='map-tooltip'
      aria-hidden={!visible}
      className={cn(
        'pointer-events-none fixed z-50 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium shadow-xl transition-opacity duration-150 ease-out',
        visible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        left: position.x,
        top: position.y - OFFSET_Y,
        transform: 'translate(-50%, -100%)',
      }}
    >
      {content}
    </div>,
    document.body
  )
}
