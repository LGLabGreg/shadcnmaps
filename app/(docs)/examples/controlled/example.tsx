'use client'

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import { usaMapData } from '@/registry/shadcnmaps/map-data/usa'
import type { RegionId } from '@/registry/shadcnmaps/maps/usa'
import { USAMap } from '@/registry/shadcnmaps/maps/usa'
import { useState } from 'react'

const regionIds = usaMapData.regions.map((r) => r.id) as RegionId[]
const regionNameMap = new Map<RegionId, string>(
  usaMapData.regions.map((r) => [r.id as RegionId, r.name])
)

export default function ControlledExample() {
  const [selectedId, setSelectedId] = useState<RegionId | null>(null)

  const selectedName = selectedId ? regionNameMap.get(selectedId) : null

  return (
    <div className='flex flex-col gap-4 xl:flex-row xl:gap-6'>
      <div className='flex-1'>
        <USAMap
          selectedRegion={selectedId}
          onRegionClick={({ region }) =>
            setSelectedId((prev) =>
              prev === region.id ? null : (region.id as RegionId)
            )
          }
        />
      </div>
      <div className='w-full space-y-4 xl:w-72'>
        <Combobox
          value={selectedId}
          onValueChange={(value: string | null) =>
            setSelectedId(value as RegionId | null)
          }
          items={regionIds}
          itemToStringLabel={(id: string) =>
            regionNameMap.get(id as RegionId) ?? id
          }
        >
          <ComboboxInput showClear placeholder='Select a state...' />
          <ComboboxContent>
            <ComboboxList>
              {(id: string) => (
                <ComboboxItem key={id} value={id}>
                  {regionNameMap.get(id as RegionId)}
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
