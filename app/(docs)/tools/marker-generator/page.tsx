'use client'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Map } from '@/registry/shadcnmaps/map'
import { franceMapData } from '@/registry/shadcnmaps/map-data/france'
import { usaMapData } from '@/registry/shadcnmaps/map-data/usa'
import type { MapData, MapMarkerData } from '@/registry/shadcnmaps/types'
import { Copy, Trash2, X } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'

const MAPS: Record<string, { data: MapData; label: string }> = {
  usa: { data: usaMapData, label: 'USA' },
  france: { data: franceMapData, label: 'France' },
}

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
  const [copied, setCopied] = useState(false)
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

  const clearMarkers = useCallback(() => {
    setMarkers([])
    counterRef.current = 0
  }, [])

  const handleMapChange = useCallback((value: string) => {
    setActiveMap(value)
    setMarkers([])
    setCursor(null)
    counterRef.current = 0
  }, [])

  const copyCode = useCallback(async () => {
    await navigator.clipboard.writeText(generateCode(markers))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [markers])

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

  const mapConfig = MAPS[activeMap]
  const code = generateCode(markers)

  return (
    <div className='mx-auto max-w-5xl px-6 py-10'>
      <h1 className='text-3xl font-bold tracking-tight'>Marker Generator</h1>
      <p className='mt-2 text-muted-foreground'>
        Click on the map to place markers and get their SVG coordinates. Copy
        the generated code to use in your project.
      </p>

      <Tabs value={activeMap} onValueChange={handleMapChange} className='mt-6'>
        <TabsList>
          {Object.entries(MAPS).map(([key, { label }]) => (
            <TabsTrigger key={key} value={key}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Map */}
      <div
        ref={wrapperRef}
        className='mt-4 cursor-crosshair rounded-lg border border-border bg-card'
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

      {/* Bottom section: marker list + code */}
      <div className='mt-6 grid gap-6 lg:grid-cols-2'>
        {/* Marker list */}
        <div>
          <div className='mb-2 flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Placed Markers</h2>
            {markers.length > 0 && (
              <Button variant='ghost' size='sm' onClick={clearMarkers}>
                <Trash2 className='mr-1 h-4 w-4' />
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
                    <X className='h-4 w-4' />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Generated code */}
        <div>
          <div className='mb-2 flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Generated Code</h2>
            {markers.length > 0 && (
              <Button variant='ghost' size='sm' onClick={copyCode}>
                <Copy className='mr-1 h-4 w-4' />
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            )}
          </div>
          <pre className='overflow-auto rounded-lg bg-muted p-4 text-sm'>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}
