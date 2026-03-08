'use client'

import { ClientCodeBlock } from '@/components/docs/client-code-block'
import { Button } from '@/components/ui/button'
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxList,
} from '@/components/ui/combobox'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Map } from '@/registry/shadcnmaps/map'
import type { MapMarkerData } from '@/registry/shadcnmaps/types'
import { Code, Trash2, Undo2, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

import { MAPS } from './maps-config'

interface PlacedMarker {
  id: string
  x: number
  y: number
}

function screenToSVG(
  svgEl: SVGSVGElement,
  clientX: number,
  clientY: number
): { x: number; y: number } | null {
  const point = svgEl.createSVGPoint()
  point.x = clientX
  point.y = clientY
  const ctm = svgEl.getScreenCTM()
  if (!ctm) return null
  const svgPoint = point.matrixTransform(ctm.inverse())
  return { x: Math.round(svgPoint.x), y: Math.round(svgPoint.y) }
}

function generateCode(markers: PlacedMarker[]): string {
  if (markers.length === 0) return '// Click on the map to place markers'

  const items = markers
    .map(
      (m) =>
        `  {\n    id: '${m.id}',\n    x: ${m.x},\n    y: ${m.y},\n    content: <circle cx={0} cy={0} r={8} className="fill-primary stroke-background stroke-[1.5]" />,\n    label: '${m.id}',\n  }`
    )
    .join(',\n')

  return `const markers: MapMarkerData[] = [\n${items}\n]`
}

export default function MarkerGeneratorPage() {
  const [activeMap, setActiveMap] = useState('usa')
  const [markers, setMarkers] = useState<PlacedMarker[]>([])
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef(0)

  const getSvgEl = useCallback(() => {
    return wrapperRef.current?.querySelector<SVGSVGElement>(
      'svg[data-slot="map"]'
    )
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      const svgEl = getSvgEl()
      if (!svgEl) return
      const coords = screenToSVG(svgEl, e.clientX, e.clientY)
      if (!coords) return
      counterRef.current += 1
      setMarkers((prev) => [
        ...prev,
        { id: `marker-${counterRef.current}`, x: coords.x, y: coords.y },
      ])
    },
    [getSvgEl]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const svgEl = getSvgEl()
      if (!svgEl) return
      const coords = screenToSVG(svgEl, e.clientX, e.clientY)
      setCursor(coords)
    },
    [getSvgEl]
  )

  const handleMouseLeave = useCallback(() => {
    setCursor(null)
  }, [])

  const removeMarker = useCallback((id: string) => {
    setMarkers((prev) => prev.filter((m) => m.id !== id))
  }, [])

  const undoMarker = useCallback(() => {
    setMarkers((prev) => prev.slice(0, -1))
  }, [])

  const clearMarkers = useCallback(() => {
    setMarkers([])
    counterRef.current = 0
  }, [])

  const handleMapChange = useCallback((value: string | null) => {
    if (!value) return
    setActiveMap(value)
    setMarkers([])
    setCursor(null)
    counterRef.current = 0
  }, [])

  const mapMarkers: MapMarkerData[] = markers.map((m) => ({
    id: m.id,
    x: m.x,
    y: m.y,
    content: (
      <circle
        cx={0}
        cy={0}
        r={6}
        className='fill-primary stroke-background stroke-[1.5]'
      />
    ),
    label: m.id,
  }))

  const mapKeys = Object.keys(MAPS)
  const mapConfig = MAPS[activeMap]
  const code = generateCode(markers)

  return (
    <div className='p-6 md:p-8'>
      <h1 className='text-3xl font-bold tracking-tight'>Marker Generator</h1>
      <p className='mt-2 text-muted-foreground'>
        Click on the map to place markers and get their SVG coordinates. Copy
        the generated code to use in your project.
      </p>

      <div className='mt-6 flex items-center justify-between gap-2'>
        <Combobox
          value={activeMap}
          onValueChange={handleMapChange}
          items={mapKeys}
          itemToStringLabel={(value: string) => MAPS[value]?.label ?? value}
        >
          <ComboboxInput className='w-48' placeholder='Select a map...' />
          <ComboboxContent>
            <ComboboxList>
              {(key: string) => (
                <ComboboxItem key={key} value={key}>
                  {MAPS[key].label}
                </ComboboxItem>
              )}
            </ComboboxList>
            <ComboboxEmpty>No maps found.</ComboboxEmpty>
          </ComboboxContent>
        </Combobox>

        <div className='flex items-center gap-1'>
          <Button
            variant='outline'
            size='icon'
            disabled={markers.length === 0}
            onClick={undoMarker}
          >
            <Undo2 className='size-4' />
          </Button>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant='outline' disabled={markers.length === 0} />
              }
            >
              <Code className='size-4' />
              View code
            </SheetTrigger>
            <SheetContent className='sm:max-w-lg!'>
              <SheetHeader>
                <SheetTitle>Markers</SheetTitle>
                <SheetDescription>
                  Copy this code to use the markers in your project.
                </SheetDescription>
              </SheetHeader>
              <div className='overflow-auto px-4 pb-4'>
                <div className='rounded-lg border'>
                  <ClientCodeBlock code={code} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Map */}
      <div
        ref={wrapperRef}
        className='mt-4 cursor-crosshair rounded-lg border border-dashed border-border bg-card'
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Map
          data={mapConfig.data}
          markers={mapMarkers}
          showTooltips={false}
          className='pointer-events-none'
        />
      </div>

      {/* Coordinate readout */}
      <div className='mt-2 flex items-center gap-4 font-mono text-sm text-muted-foreground'>
        {cursor ? (
          <span>
            x: {cursor.x}, y: {cursor.y}
          </span>
        ) : (
          <span>Move mouse over the map to see coordinates</span>
        )}
        {markers.length > 0 && (
          <span className='ml-auto'>
            {markers.length} marker{markers.length !== 1 && 's'} placed
          </span>
        )}
      </div>

      {/* Marker list */}
      <div className='mt-6'>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>Placed Markers</h2>
          {markers.length > 0 && (
            <Button variant='ghost' size='sm' onClick={clearMarkers}>
              <Trash2 className='size-4' />
              Clear all
            </Button>
          )}
        </div>
        {markers.length === 0 ? (
          <p className='text-sm text-muted-foreground'>
            No markers placed yet. Click on the map to add one.
          </p>
        ) : (
          <div className='divide-y divide-border rounded-lg border'>
            {markers.map((m) => (
              <div
                key={m.id}
                className='flex items-center justify-between px-3 py-2 text-sm'
              >
                <span className='font-mono'>
                  {m.id}{' '}
                  <span className='text-muted-foreground'>
                    ({m.x}, {m.y})
                  </span>
                </span>
                <button
                  onClick={() => removeMarker(m.id)}
                  className='text-muted-foreground hover:text-foreground'
                >
                  <X className='size-4' />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
