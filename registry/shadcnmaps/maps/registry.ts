import { registryUrl } from '@/lib/config'

export const maps = [
  {
    name: 'usa',
    type: 'registry:component',
    title: 'USA Map',
    description:
      'Interactive United States map with all 50 states and DC. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('usa-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/usa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/usa.tsx',
      },
    ],
  },
  {
    name: 'france',
    type: 'registry:component',
    title: 'France Map',
    description:
      'Interactive France map with 13 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('france-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/france.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/france.tsx',
      },
    ],
  },
  {
    name: 'world',
    type: 'registry:component',
    title: 'World Map',
    description:
      'Interactive World map with 256 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('world-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/world.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/world.tsx',
      },
    ],
  },
]
