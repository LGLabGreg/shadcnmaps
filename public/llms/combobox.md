<DocPage llmsSlug="combobox">

# Combobox

Select a state from the combobox or click a region on the map. The sidebar updates with region-specific content and the selection stays in sync.

```tsx
'use client'

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import { useMapContext } from '@/components/shadcnmaps/map-context'
import { usaMapData } from '@/components/shadcnmaps/map-data/usa'
import { USAMap } from '@/components/shadcnmaps/maps/usa'
import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'

const regionIds = usaMapData.regions.map((r) => r.id)
const regionNameMap = new Map(usaMapData.regions.map((r) => [r.id, r.name]))

interface RegionSyncHandle {
  select: (id: string | null) => void
}

const RegionSyncer = forwardRef<
  RegionSyncHandle,
  { onContextChange: (id: string | null) => void }
>(function RegionSyncer({ onContextChange }, ref) {
  const { selectedRegion, setSelectedRegion } = useMapContext()
  const prevRef = useRef(selectedRegion)

  // Expose imperative select for combobox → map sync
  useImperativeHandle(ref, () => ({
    select: (id: string | null) => {
      setSelectedRegion(id)
    },
  }))

  // Detect map clicks (context changed without imperative call)
  if (prevRef.current !== selectedRegion) {
    prevRef.current = selectedRegion
    onContextChange(selectedRegion)
  }

  return null
})

export default function ComboboxExample() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const syncRef = useRef<RegionSyncHandle>(null)

  const handleContextChange = useCallback((id: string | null) => {
    setSelectedId(id)
  }, [])

  const handleComboboxChange = useCallback(
    (value: string | null) => {
      setSelectedId(value)
      syncRef.current?.select(value)
    },
    []
  )

  const selectedName = selectedId ? regionNameMap.get(selectedId) : null

  const controls = useMemo(
    () => (
      <RegionSyncer ref={syncRef} onContextChange={handleContextChange} />
    ),
    [handleContextChange]
  )

  return (
    <div className='flex flex-col gap-4 md:flex-row md:gap-6'>
      <div className='flex-1'>
        <USAMap controls={controls} />
      </div>
      <div className='w-full space-y-4 md:w-72'>
        <Combobox
          value={selectedId}
          onValueChange={handleComboboxChange}
          items={regionIds}
          itemToStringLabel={(id: string) => regionNameMap.get(id) ?? id}
        >
          <ComboboxInput
            showClear
            placeholder='Select a state...'
          />
          <ComboboxContent>
            <ComboboxList>
              {(id: string) => (
                <ComboboxItem key={id} value={id}>
                  {regionNameMap.get(id)}
                </ComboboxItem>
              )}
            </ComboboxList>
            <ComboboxEmpty>No states found.</ComboboxEmpty>
          </ComboboxContent>
        </Combobox>
        <div className='rounded-lg border p-4'>
          {selectedName ? (
            <>
              <h3 className='text-lg font-semibold'>{selectedName}</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                You selected {selectedName}. This sidebar could display
                population data, economic indicators, or any other
                region-specific content.
              </p>
            </>
          ) : (
            <p className='text-sm text-muted-foreground'>
              Click a state on the map or use the dropdown above to see details.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
```
