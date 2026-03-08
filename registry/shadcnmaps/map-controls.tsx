'use client'

import { cn } from '@/lib/utils'
import { useCallback } from 'react'

import { useMapContext } from './map-context'

export interface MapControlsProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  showPanButtons?: boolean
  className?: string
}

const positionClasses: Record<string, string> = {
  'top-left': 'top-2 left-2',
  'top-right': 'top-2 right-2',
  'bottom-left': 'bottom-2 left-2',
  'bottom-right': 'bottom-2 right-2',
}

function ControlButton({
  onClick,
  disabled,
  'aria-label': ariaLabel,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  'aria-label': string
  children: React.ReactNode
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className='flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-foreground shadow-sm transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50'
    >
      {children}
    </button>
  )
}

function PlusIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <path d='M5 12h14' />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' />
      <path d='M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m18 15-6-6-6 6' />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15 18-6-6 6-6' />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m9 18 6-6-6-6' />
    </svg>
  )
}

export function MapControls({
  position = 'top-right',
  showPanButtons = true,
  className,
}: MapControlsProps) {
  const { zoomIn, zoomOut, resetZoom, zoomState, zoomConfig, setZoomState } =
    useMapContext()

  const panUp = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      translateY: prev.translateY + zoomConfig.panStep,
    }))
  }, [setZoomState, zoomConfig.panStep])

  const panDown = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      translateY: prev.translateY - zoomConfig.panStep,
    }))
  }, [setZoomState, zoomConfig.panStep])

  const panLeft = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      translateX: prev.translateX + zoomConfig.panStep,
    }))
  }, [setZoomState, zoomConfig.panStep])

  const panRight = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      translateX: prev.translateX - zoomConfig.panStep,
    }))
  }, [setZoomState, zoomConfig.panStep])

  const atMaxZoom = zoomState.scale >= zoomConfig.maxZoom
  const atMinZoom = zoomState.scale <= zoomConfig.minZoom

  return (
    <div
      data-slot='map-controls'
      className={cn(
        'absolute z-10 flex flex-col items-center gap-1',
        positionClasses[position],
        className
      )}
    >
      <ControlButton onClick={zoomIn} disabled={atMaxZoom} aria-label='Zoom in'>
        <PlusIcon />
      </ControlButton>
      <ControlButton
        onClick={zoomOut}
        disabled={atMinZoom}
        aria-label='Zoom out'
      >
        <MinusIcon />
      </ControlButton>
      <ControlButton onClick={resetZoom} aria-label='Reset zoom'>
        <HomeIcon />
      </ControlButton>
      {showPanButtons ? (
        <>
          <div className='my-0.5 h-px w-6 bg-border' />
          <ControlButton onClick={panUp} aria-label='Pan up'>
            <ChevronUp />
          </ControlButton>
          <div className='flex gap-1'>
            <ControlButton onClick={panLeft} aria-label='Pan left'>
              <ChevronLeft />
            </ControlButton>
            <ControlButton onClick={panRight} aria-label='Pan right'>
              <ChevronRight />
            </ControlButton>
          </div>
          <ControlButton onClick={panDown} aria-label='Pan down'>
            <ChevronDown />
          </ControlButton>
        </>
      ) : null}
    </div>
  )
}
