import { writeFileSync } from 'fs'
import { resolve } from 'path'

import { mapData } from '@/registry/shadcnmaps/map-data/registry'
import { maps } from '@/registry/shadcnmaps/maps/registry'
import { components } from '@/registry/shadcnmaps/registry'

const registry = {
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'shadcnmaps',
  homepage: 'https://shadcnmaps.com',
  items: [...components, ...maps, ...mapData],
}

writeFileSync(
  resolve(process.cwd(), 'registry.json'),
  JSON.stringify(registry, null, 2)
)

// eslint-disable-next-line no-console
console.log(`✓ Built registry with ${registry.items.length} items`)
