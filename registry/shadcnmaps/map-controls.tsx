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
      className='flex h-8 w-8 items-center justify-center rounded-md bg-background text-foreground shadow-sm ring-1 ring-border transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-50'
    >
      {children}
    </button>
  )
}

function PlusIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <line x1='8' y1='3' x2='8' y2='13' />
      <line x1='3' y1='8' x2='13' y2='8' />
    </svg>
  )
}

function MinusIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    >
      <line x1='3' y1='8' x2='13' y2='8' />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M3 6.5L8 2.5L13 6.5V13H10V10H6V13H3V6.5Z' />
    </svg>
  )
}

function ChevronUp() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='4,10 8,6 12,10' />
    </svg>
  )
}

function ChevronDown() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='4,6 8,10 12,6' />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='10,4 6,8 10,12' />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='6,4 10,8 6,12' />
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
