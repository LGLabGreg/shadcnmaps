# Kazakhstan Map

Interactive SVG map of Kazakhstan with 16 regions. Supports click, hover, keyboard navigation, tooltips, and custom markers.

## Installation

```bash
npx shadcn@latest add @shadcnmaps/kazakhstan
```

```tsx
'use client'

import { KazakhstanMap } from '@/components/shadcnmaps/maps/kazakhstan'

export default function SimpleExample() {
  return <KazakhstanMap />
}
```

## Map Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `regions` | `RegionOverride[]` | `[]` | Per-region overrides for className, tooltipContent, disabled, and display fields. |
| `disabledRegions` | `string[]` | `[]` | Region IDs to mark as non-interactive. |
| `onRegionClick` | `(event: RegionEvent) => void` | — | Fired on click or keyboard Enter/Space. |
| `onRegionEnter` | `(event: RegionEvent) => void` | — | Fired on mouse enter or focus. |
| `onRegionLeave` | `(event: RegionEvent) => void` | — | Fired on mouse leave or blur. |
| `onMarkerClick` | `(event: MarkerEvent) => void` | — | Fired when a marker is clicked. |
| `markers` | `MapMarkerData[]` | `[]` | SVG markers to overlay on the map. |
| `renderTooltip` | `(region: MapRegionData) => ReactNode` | — | Custom tooltip renderer. Falls back to region name. |
| `showLabels` | `boolean` | `true` | Show abbreviation labels inside each region. |
| `showTooltips` | `boolean` | `true` | Enable tooltip on hover and click. |
| `className` | `string` | — | Class applied to the root SVG element. |
| `aria-label` | `string` | `Map name` | Accessible label for the map. |
| `enableZoom` | `boolean` | `false` | Enable zoom and pan gestures (wheel, drag, pinch). |
| `zoomConfig` | `Partial<ZoomConfig>` | — | Override default zoom configuration. See Zoom & Pan docs. |
| `controls` | `ReactNode` | — | Control overlay rendered inside the map container (e.g. MapControls). |

## Types

### RegionEvent

```typescript
interface RegionEvent {
  region: MapRegionData
  nativeEvent: MouseEvent | TouchEvent | FocusEvent | KeyboardEvent
}
```

### MarkerEvent

```typescript
interface MarkerEvent {
  id: string
  nativeEvent: MouseEvent | TouchEvent | FocusEvent | KeyboardEvent
}
```

### RegionOverride

```typescript
interface RegionOverride {
  id: string
  name?: string
  abbreviation?: string
  labelX?: number
  labelY?: number
  metadata?: Record<string, unknown>
  className?: string
  labelClassName?: string
  tooltipContent?: ReactNode
  disabled?: boolean
}
```

### MapRegionData

```typescript
interface MapRegionData {
  id: string
  name: string
  path: string
  abbreviation?: string
  labelX?: number
  labelY?: number
  metadata?: Record<string, unknown>
}
```

### MapMarkerData

```typescript
interface MapMarkerData {
  id: string
  x: number
  y: number
  content: ReactNode
  tooltipContent?: ReactNode
  label?: string
  disabled?: boolean
}
```

## CSS variables

These variables are injected into your project when you install any map component.

### Region colors

| Variable | Tailwind class | Description |
| --- | --- | --- |
| `--map-region` | `fill-map-region` | Default region fill |
| `--map-region-hover` | `fill-map-region-hover` | Fill on hover |
| `--map-region-selected` | `fill-map-region-selected` | Fill when selected |
| `--map-region-disabled` | `fill-map-region-disabled` | Fill when disabled |

### Stroke colors

| Variable | Tailwind class | Description |
| --- | --- | --- |
| `--map-region-stroke` | `stroke-map-region-stroke` | Default border between regions |
| `--map-region-stroke-hover` | `stroke-map-region-stroke-hover` | Border on hover |
| `--map-region-focus-ring` | `stroke-map-region-focus-ring` | Keyboard focus ring color |

### Label colors

| Variable | Tailwind class | Description |
| --- | --- | --- |
| `--map-label` | `text-map-label` | Abbreviation label color |
| `--map-label-hover` | — | Label color on hover |
| `--map-label-selected` | — | Label color when selected |
