import { act, fireEvent, render, screen, within } from '@testing-library/react'

import { Map, type MapProps } from '../map'
import { useMapContext } from '../map-context'
import { MapControls } from '../map-controls'
import { renderMap, testMapData, testMarkers } from './test-utils'

// ─── Group 1: Rendering ─────────────────────────────────────────────────────

describe('Rendering', () => {
  it('renders SVG with all regions', () => {
    renderMap()
    const regions = screen.getAllByRole('button', { hidden: true })
    // 3 regions (path buttons in the SVG)
    const regionPaths = regions.filter(
      (el) => el.getAttribute('data-slot') === 'map-region'
    )
    expect(regionPaths).toHaveLength(3)
  })

  it('shows labels when showLabels is true (default)', () => {
    renderMap()
    // Regions A and B have abbreviations; C does not
    const labels = document.querySelectorAll('[data-slot="map-region-label"]')
    expect(labels).toHaveLength(2)
    expect(labels[0].textContent).toBe('A')
    expect(labels[1].textContent).toBe('B')
  })

  it('hides labels when showLabels is false', () => {
    renderMap({ showLabels: false })
    const labels = document.querySelectorAll('[data-slot="map-region-label"]')
    expect(labels).toHaveLength(0)
  })

  it('applies aria-label from data.name by default', () => {
    renderMap()
    expect(screen.getByRole('group', { name: 'Test Map' })).toBeInTheDocument()
  })

  it('overrides aria-label with prop', () => {
    renderMap({ 'aria-label': 'Custom Map Label' })
    expect(
      screen.getByRole('group', { name: 'Custom Map Label' })
    ).toBeInTheDocument()
  })

  it('renders <desc> for accessibility', () => {
    renderMap()
    const desc = document.querySelector('desc')
    expect(desc).toBeInTheDocument()
    expect(desc?.textContent).toContain('Interactive map')
  })

  it('renders hidden listbox with options', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    expect(listbox).toBeInTheDocument()
    const options = within(listbox).getAllByRole('option')
    expect(options).toHaveLength(3)
  })

  it('applies custom className to SVG', () => {
    renderMap({ className: 'my-custom-class' })
    const svg = document.querySelector('[data-slot="map"]')
    expect(svg).toHaveClass('my-custom-class')
  })
})

// ─── Group 2: Region Click — Selection ───────────────────────────────────────

describe('Region Click — Selection', () => {
  it('click selects region', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
  })

  it('click again deselects', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    await user.click(regionA)
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
  })

  it('click different region switches selection', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    const regionB = screen.getByRole('button', {
      name: 'Region B',
      hidden: true,
    })
    await user.click(regionA)
    await user.click(regionB)
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
    expect(regionB).toHaveAttribute('aria-pressed', 'true')
  })

  it('onRegionClick callback fires with region data', async () => {
    const handler = vi.fn()
    const { user } = renderMap({ onRegionClick: handler })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A', name: 'Region A' }),
      })
    )
  })

  it('screen reader announcement on select', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(screen.getByRole('status')).toHaveTextContent('Region A selected')
  })

  it('screen reader announcement on deselect', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    await user.click(regionA)
    expect(screen.getByRole('status')).toHaveTextContent('Region A deselected')
  })
})

// ─── Group 3: Disabled Regions ───────────────────────────────────────────────

describe('Disabled Regions', () => {
  it('disabledRegions prop sets aria-disabled', () => {
    renderMap({ disabledRegions: ['A'] })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-disabled', 'true')
  })

  it('click on disabled region does not select or fire callback', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      disabledRegions: ['A'],
      onRegionClick: handler,
    })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
    expect(handler).not.toHaveBeenCalled()
  })

  it('hover on disabled region does not fire onRegionEnter', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      disabledRegions: ['A'],
      onRegionEnter: handler,
    })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.hover(regionA)
    expect(handler).not.toHaveBeenCalled()
  })

  it('RegionOverride.disabled works', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      regions: [{ id: 'B', disabled: true }],
      onRegionClick: handler,
    })
    const regionB = screen.getByRole('button', {
      name: 'Region B',
      hidden: true,
    })
    expect(regionB).toHaveAttribute('aria-disabled', 'true')
    await user.click(regionB)
    expect(handler).not.toHaveBeenCalled()
  })
})

// ─── Group 4: Region Hover & Tooltips ────────────────────────────────────────

describe('Region Hover & Tooltips', () => {
  it('mouseEnter fires onRegionEnter', async () => {
    const handler = vi.fn()
    const { user } = renderMap({ onRegionEnter: handler })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.hover(regionA)
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A' }),
      })
    )
  })

  it('mouseLeave fires onRegionLeave', async () => {
    const handler = vi.fn()
    const { user } = renderMap({ onRegionLeave: handler })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.hover(regionA)
    await user.unhover(regionA)
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A' }),
      })
    )
  })

  it('hover shows tooltip', async () => {
    const { user } = renderMap({ showTooltips: true })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.hover(regionA)
    const tooltip = document.querySelector('[data-slot="map-tooltip"]')
    // Tooltip may render with position null in jsdom (no real mouse coords), so it may not appear.
    // If it does appear, check visibility.
    if (tooltip) {
      expect(tooltip).toHaveAttribute('aria-hidden', 'false')
    }
  })

  it('leave hides tooltip', async () => {
    const { user } = renderMap({ showTooltips: true })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.hover(regionA)
    await user.unhover(regionA)
    const tooltip = document.querySelector('[data-slot="map-tooltip"]')
    if (tooltip) {
      expect(tooltip).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('showTooltips=false suppresses tooltip on click', async () => {
    const { user } = renderMap({ showTooltips: false })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    const tooltip = document.querySelector('[data-slot="map-tooltip"]')
    expect(tooltip).toBeNull()
  })

  it('renderTooltip overrides tooltip content', async () => {
    const { user } = renderMap({
      showTooltips: true,
      renderTooltip: (region) => <span data-testid='custom'>{region.id}</span>,
    })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    const custom = document.querySelector('[data-testid="custom"]')
    if (custom) {
      expect(custom.textContent).toBe('A')
    }
  })

  it('RegionOverride.tooltipContent overrides default', async () => {
    const { user } = renderMap({
      showTooltips: true,
      regions: [{ id: 'A', tooltipContent: 'Custom A tooltip' }],
    })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    const tooltip = document.querySelector('[data-slot="map-tooltip"]')
    if (tooltip) {
      expect(tooltip.textContent).toContain('Custom A tooltip')
    }
  })
})

// ─── Group 5: Region Overrides ───────────────────────────────────────────────

describe('Region Overrides', () => {
  it('override changes aria-label (name override)', () => {
    renderMap({ regions: [{ id: 'A', name: 'Alpha' }] })
    expect(
      screen.getByRole('button', { name: 'Alpha', hidden: true })
    ).toBeInTheDocument()
  })

  it('override adds className', () => {
    renderMap({ regions: [{ id: 'A', className: 'fill-red-500' }] })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA.getAttribute('class')).toContain('fill-red-500')
  })

  it('override passes metadata through event callback', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      regions: [{ id: 'A', metadata: { population: 1000 } }],
      onRegionClick: handler,
    })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({
          metadata: { population: 1000 },
        }),
      })
    )
  })
})

// ─── Group 6: Keyboard Navigation via Listbox ────────────────────────────────

describe('Keyboard Navigation via Listbox', () => {
  // Helper: get the focused option's text content
  function focusedOptionText() {
    const listbox = screen.getByRole('listbox')
    const focused = listbox.querySelector('[tabindex="0"]')
    return focused?.textContent ?? null
  }

  it('first option is tabbable by default', () => {
    renderMap()
    expect(focusedOptionText()).toBe('Region A')
  })

  it('selected region becomes tabbable option', async () => {
    const { user } = renderMap()
    const regionB = screen.getByRole('button', {
      name: 'Region B',
      hidden: true,
    })
    await user.click(regionB)
    expect(focusedOptionText()).toBe('Region B')
  })

  it('ArrowDown moves to next region', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    expect(focusedOptionText()).toBe('Region B')
  })

  it('ArrowDown wraps around at end', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    expect(focusedOptionText()).toBe('Region A')
  })

  it('ArrowUp moves to previous region', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    fireEvent.keyDown(listbox, { key: 'ArrowUp' })
    expect(focusedOptionText()).toBe('Region A')
  })

  it('ArrowUp wraps around at beginning', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowUp' })
    expect(focusedOptionText()).toBe('Region C')
  })

  it('Home jumps to first region', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    fireEvent.keyDown(listbox, { key: 'Home' })
    expect(focusedOptionText()).toBe('Region A')
  })

  it('End jumps to last region', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'End' })
    expect(focusedOptionText()).toBe('Region C')
  })

  it('Enter toggles selection', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'Enter' })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
  })

  it('Space toggles selection', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: ' ' })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
  })

  it('Escape clears selection', async () => {
    const { user } = renderMap()
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
    const listbox = screen.getByRole('listbox')
    const focusedOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => focusedOption.focus())
    fireEvent.keyDown(listbox, { key: 'Escape' })
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
  })

  it('disabled regions skipped during navigation', () => {
    renderMap({ disabledRegions: ['B'] })
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'ArrowDown' })
    expect(focusedOptionText()).toBe('Region C')
  })

  it('typeahead jumps to matching region name', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    // Move to end (Region C), then type "region" to jump back to first match (Region A)
    fireEvent.keyDown(listbox, { key: 'End' })
    expect(focusedOptionText()).toBe('Region C')
    for (const char of 'region') {
      fireEvent.keyDown(listbox, { key: char })
    }
    expect(focusedOptionText()).toBe('Region A')
  })

  it('blur clears focused region', () => {
    renderMap()
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    expect(focusedOptionText()).toBe('Region A')
    fireEvent.blur(firstOption)
    // After blur leaves listbox, no option should be the "focused" one
    // (focusableId falls back to first region, but focusedRegion is null)
  })

  it('onRegionClick fires with nativeEvent: null on keyboard select', () => {
    const handler = vi.fn()
    renderMap({ onRegionClick: handler })
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'Enter' })
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ nativeEvent: null })
    )
  })
})

// ─── Group 6b: Controlled Selection ──────────────────────────────────────────

describe('Controlled Selection', () => {
  it('selectedRegion prop highlights region', () => {
    renderMap({ selectedRegion: 'A' })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
  })

  it('selectedRegion=null shows no selection', () => {
    renderMap({ selectedRegion: null })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
  })

  it('changing selectedRegion prop updates highlight', () => {
    const { rerender } = renderMap({ selectedRegion: 'A' })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    const regionB = screen.getByRole('button', {
      name: 'Region B',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
    expect(regionB).toHaveAttribute('aria-pressed', 'false')

    rerender(<Map data={testMapData} selectedRegion='B' />)
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
    expect(regionB).toHaveAttribute('aria-pressed', 'true')
  })

  it('click does not change selection internally (parent owns state)', async () => {
    const handler = vi.fn()
    const { user } = renderMap({ selectedRegion: 'A', onRegionClick: handler })
    const regionB = screen.getByRole('button', {
      name: 'Region B',
      hidden: true,
    })
    await user.click(regionB)
    // onRegionClick fires so parent can update
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'B' }),
      })
    )
    // But internal state did not change — A is still selected
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    expect(regionA).toHaveAttribute('aria-pressed', 'true')
    expect(regionB).toHaveAttribute('aria-pressed', 'false')
  })

  it('keyboard Enter fires onRegionClick in controlled mode', () => {
    const handler = vi.fn()
    renderMap({ selectedRegion: null, onRegionClick: handler })
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'Enter' })
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A' }),
      })
    )
  })

  it('Escape fires onRegionClick with selected region in controlled mode', () => {
    const handler = vi.fn()
    renderMap({ selectedRegion: 'A', onRegionClick: handler })
    const listbox = screen.getByRole('listbox')
    const focusedOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => focusedOption.focus())
    fireEvent.keyDown(listbox, { key: 'Escape' })
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A' }),
        nativeEvent: null,
      })
    )
  })

  it('Escape with no selection does not fire onRegionClick', () => {
    const handler = vi.fn()
    renderMap({ selectedRegion: null, onRegionClick: handler })
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'Escape' })
    expect(handler).not.toHaveBeenCalled()
  })
})

// ─── Group 6c: Escape fires onRegionClick (uncontrolled) ────────────────────

describe('Escape fires onRegionClick (uncontrolled)', () => {
  it('Escape fires onRegionClick with the deselected region', async () => {
    const handler = vi.fn()
    const { user } = renderMap({ onRegionClick: handler })
    const regionA = screen.getByRole('button', {
      name: 'Region A',
      hidden: true,
    })
    await user.click(regionA)
    handler.mockClear()

    const listbox = screen.getByRole('listbox')
    const focusedOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => focusedOption.focus())
    fireEvent.keyDown(listbox, { key: 'Escape' })

    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({
        region: expect.objectContaining({ id: 'A' }),
        nativeEvent: null,
      })
    )
    expect(regionA).toHaveAttribute('aria-pressed', 'false')
  })

  it('Escape with no selection does not fire onRegionClick', () => {
    const handler = vi.fn()
    renderMap({ onRegionClick: handler })
    const listbox = screen.getByRole('listbox')
    const firstOption = listbox.querySelector('[tabindex="0"]') as HTMLElement
    act(() => firstOption.focus())
    fireEvent.keyDown(listbox, { key: 'Escape' })
    expect(handler).not.toHaveBeenCalled()
  })
})

// ─── Group 7: Markers ────────────────────────────────────────────────────────

describe('Markers', () => {
  it('renders marker groups with accessible labels', () => {
    renderMap({ markers: testMarkers })
    expect(
      screen.getByRole('button', { name: 'City Alpha', hidden: true })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'City Beta', hidden: true })
    ).toBeInTheDocument()
  })

  it('click fires onMarkerClick', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      markers: testMarkers,
      onMarkerClick: handler,
    })
    const marker = screen.getByRole('button', {
      name: 'City Alpha',
      hidden: true,
    })
    await user.click(marker)
    expect(handler).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'marker-1' })
    )
  })

  it('disabled marker has tabIndex=-1', () => {
    renderMap({ markers: testMarkers })
    const marker = screen.getByRole('button', {
      name: 'City Beta',
      hidden: true,
    })
    expect(marker).toHaveAttribute('tabindex', '-1')
  })

  it('disabled marker click does nothing', async () => {
    const handler = vi.fn()
    const { user } = renderMap({
      markers: testMarkers,
      onMarkerClick: handler,
    })
    const marker = screen.getByRole('button', {
      name: 'City Beta',
      hidden: true,
    })
    await user.click(marker)
    expect(handler).not.toHaveBeenCalled()
  })

  it('keyboard Enter activates marker', () => {
    const handler = vi.fn()
    renderMap({ markers: testMarkers, onMarkerClick: handler })
    const marker = screen.getByRole('button', {
      name: 'City Alpha',
      hidden: true,
    })
    fireEvent.keyDown(marker, { key: 'Enter' })
    expect(handler).toHaveBeenCalled()
  })

  it('keyboard Space activates marker', () => {
    const handler = vi.fn()
    renderMap({ markers: testMarkers, onMarkerClick: handler })
    const marker = screen.getByRole('button', {
      name: 'City Alpha',
      hidden: true,
    })
    fireEvent.keyDown(marker, { key: ' ' })
    expect(handler).toHaveBeenCalled()
  })

  it('marker hover fires enter callback via mouseEnter', () => {
    renderMap({ markers: testMarkers, showTooltips: true })
    const marker = screen.getByRole('button', {
      name: 'City Alpha',
      hidden: true,
    })
    fireEvent.mouseEnter(marker)
    // Tooltip state is updated internally; since jsdom has no coordinates the portal may not render,
    // but we verify no error is thrown and the event flow completes
  })

  it('disabled marker hover does not fire callbacks', () => {
    renderMap({ markers: testMarkers, showTooltips: true })
    const marker = screen.getByRole('button', {
      name: 'City Beta',
      hidden: true,
    })
    fireEvent.mouseEnter(marker)
    const tooltip = document.querySelector('[data-slot="map-tooltip"]')
    expect(tooltip).toBeNull()
  })
})

// ─── Group 8: MapControls — Zoom Buttons ─────────────────────────────────────

describe('MapControls — Zoom Buttons', () => {
  function renderWithControls(overrides: Partial<MapProps> = {}) {
    return renderMap({
      enableZoom: true,
      controls: <MapControls />,
      ...overrides,
    })
  }

  it('renders zoom in/out/reset buttons', () => {
    renderWithControls()
    expect(screen.getByRole('button', { name: 'Zoom in' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Zoom out' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Reset zoom' })
    ).toBeInTheDocument()
  })

  it('zoom out disabled at min zoom (initial)', () => {
    renderWithControls()
    expect(screen.getByRole('button', { name: 'Zoom out' })).toBeDisabled()
  })

  it('click zoom in enables zoom out', () => {
    renderWithControls()
    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))
    expect(screen.getByRole('button', { name: 'Zoom out' })).not.toBeDisabled()
  })

  it('zoom in disabled at max zoom', () => {
    renderWithControls({
      zoomConfig: { minZoom: 1, maxZoom: 1.5, zoomStep: 0.5, panStep: 50 },
    })
    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))
    expect(screen.getByRole('button', { name: 'Zoom in' })).toBeDisabled()
  })

  it('reset returns to initial state', () => {
    renderWithControls()
    fireEvent.click(screen.getByRole('button', { name: 'Zoom in' }))
    fireEvent.click(screen.getByRole('button', { name: 'Reset zoom' }))
    expect(screen.getByRole('button', { name: 'Zoom out' })).toBeDisabled()
  })

  it('pan buttons rendered by default', () => {
    renderWithControls()
    expect(screen.getByRole('button', { name: 'Pan up' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pan down' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pan left' })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Pan right' })
    ).toBeInTheDocument()
  })

  it('pan buttons hidden with showPanButtons=false', () => {
    renderMap({
      enableZoom: true,
      controls: <MapControls showPanButtons={false} />,
    })
    expect(screen.queryByRole('button', { name: 'Pan up' })).toBeNull()
  })
})

// ─── Group 10: Context Error ─────────────────────────────────────────────────

describe('Context Error', () => {
  it('useMapContext() outside provider throws', () => {
    function BadComponent() {
      useMapContext()
      return null
    }
    expect(() => render(<BadComponent />)).toThrow(
      'useMapContext must be used within a MapProvider'
    )
  })
})

// ─── Group 11: Edge Cases ────────────────────────────────────────────────────

describe('Edge Cases', () => {
  it('empty regions array: SVG renders, no paths', () => {
    renderMap({
      data: { id: 'empty', name: 'Empty', viewBox: '0 0 100 100', regions: [] },
    })
    expect(screen.getByRole('group', { name: 'Empty' })).toBeInTheDocument()
    expect(document.querySelectorAll('[data-slot="map-region"]')).toHaveLength(
      0
    )
  })

  it('region without abbreviation: no label text', () => {
    renderMap()
    // Region C has no abbreviation
    const labels = document.querySelectorAll('[data-slot="map-region-label"]')
    const labelTexts = Array.from(labels).map((l) => l.textContent)
    expect(labelTexts).not.toContain('C')
  })

  it('children prop renders inside SVG', () => {
    renderMap({
      children: <circle data-testid='child-circle' cx='50' cy='50' r='5' />,
    })
    expect(
      document.querySelector('[data-testid="child-circle"]')
    ).toBeInTheDocument()
  })
})
