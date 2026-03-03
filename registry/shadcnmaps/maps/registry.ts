import { registryUrl } from '@/lib/config'

export const maps = [
  {
    name: 'usa-map',
    type: 'registry:component',
    title: 'USA Map',
    description:
      'Interactive United States map with all 50 states and DC. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('usa-map-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/usa-map.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/usa-map.tsx',
      },
    ],
  },
]
