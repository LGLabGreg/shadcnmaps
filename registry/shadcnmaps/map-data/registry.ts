export const mapData = [
  {
    name: 'usa-data',
    type: 'registry:file',
    title: 'USA Map Data',
    description: 'SVG path data for all 50 US states and DC.',
    files: [
      {
        path: 'registry/shadcnmaps/map-data/usa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/usa.ts',
      },
    ],
  },
  {
    name: 'france-data',
    type: 'registry:file',
    title: 'France Map Data',
    description: 'SVG path data for France with 13 regions.',
    files: [
      {
        path: 'registry/shadcnmaps/map-data/france.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/france.ts',
      },
    ],
  },
  {
    name: 'world-data',
    type: 'registry:file',
    title: 'World Map Data',
    description: 'SVG path data for World with 256 regions.',
    files: [
      {
        path: 'registry/shadcnmaps/map-data/world.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/world.ts',
      },
    ],
  },
]
