'use client'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { navigation } from '@/lib/navigation'
import Link from 'next/link'
import { useMemo, useState } from 'react'

const CATEGORY_ALL = 'All'

function getMapsData() {
  const mapsSection = navigation.find((s) => s.title === 'Maps')
  if (!mapsSection?.groups) return { categories: [], maps: [] }

  const categories = mapsSection.groups
    .filter((g) => g.items.length > 0)
    .map((g) => g.title)

  const maps = mapsSection.groups
    .flatMap((g) => g.items.map((item) => ({ ...item, category: g.title })))
    .toSorted((a, b) => a.title.localeCompare(b.title))

  return { categories, maps }
}

export function MapsIndex() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ALL)

  const { categories, maps } = useMemo(() => getMapsData(), [])

  const filtered = useMemo(() => {
    return maps.filter((map) => {
      const matchesSearch = map.title
        .toLowerCase()
        .includes(search.toLowerCase())
      const matchesCategory =
        activeCategory === CATEGORY_ALL || map.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [maps, search, activeCategory])

  return (
    <div>
      <div className='mb-6 flex flex-col gap-4 sm:flex-row sm:items-center'>
        <input
          type='text'
          placeholder='Search maps...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none sm:w-64'
        />
        <ToggleGroup
          value={[activeCategory]}
          onValueChange={(value) => {
            const next = value.find((v) => v !== activeCategory)
            setActiveCategory(next ?? CATEGORY_ALL)
          }}
          variant='outline'
          className='flex-wrap'
        >
          {[CATEGORY_ALL, ...categories].map((cat) => (
            <ToggleGroupItem size='lg' key={cat} value={cat}>
              {cat}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {filtered.length === 0 ? (
        <p className='py-8 text-center text-sm text-muted-foreground'>
          No maps found.
        </p>
      ) : (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filtered.map((map) => (
            <Link
              key={map.href}
              href={map.href}
              className='rounded-lg border border-border p-4 transition-colors hover:bg-accent'
            >
              <div className='font-medium'>{map.title}</div>
              <div className='text-xs text-muted-foreground'>
                {map.category}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
