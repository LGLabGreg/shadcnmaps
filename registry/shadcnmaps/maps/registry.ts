import { registryUrl } from '@/lib/config'

export const maps = [
  {
    name: 'usa',
    type: 'registry:component',
    title: 'USA Map',
    description:
      'Interactive United States map with all 50 states and DC. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/usa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/usa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/usa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/usa.ts',
      },
    ],
  },
  {
    name: 'africa',
    type: 'registry:component',
    title: 'Africa',
    description:
      'Interactive Africa map with 56 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/africa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/africa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/africa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/africa.ts',
      },
    ],
  },
  {
    name: 'alabama',
    type: 'registry:component',
    title: 'Alabama',
    description:
      'Interactive Alabama map with 68 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/alabama.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/alabama.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/alabama.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/alabama.ts',
      },
    ],
  },
  {
    name: 'alaska',
    type: 'registry:component',
    title: 'Alaska',
    description:
      'Interactive Alaska map with 30 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/alaska.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/alaska.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/alaska.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/alaska.ts',
      },
    ],
  },
  {
    name: 'algeria',
    type: 'registry:component',
    title: 'Algeria',
    description:
      'Interactive Algeria map with 49 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/algeria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/algeria.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/algeria.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/algeria.ts',
      },
    ],
  },
  {
    name: 'angola',
    type: 'registry:component',
    title: 'Angola',
    description:
      'Interactive Angola map with 19 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/angola.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/angola.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/angola.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/angola.ts',
      },
    ],
  },
  {
    name: 'argentina',
    type: 'registry:component',
    title: 'Argentina',
    description:
      'Interactive Argentina map with 25 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/argentina.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/argentina.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/argentina.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/argentina.ts',
      },
    ],
  },
  {
    name: 'arizona',
    type: 'registry:component',
    title: 'Arizona',
    description:
      'Interactive Arizona map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/arizona.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/arizona.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/arizona.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/arizona.ts',
      },
    ],
  },
  {
    name: 'arkansas',
    type: 'registry:component',
    title: 'Arkansas',
    description:
      'Interactive Arkansas map with 76 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/arkansas.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/arkansas.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/arkansas.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/arkansas.ts',
      },
    ],
  },
  {
    name: 'asia',
    type: 'registry:component',
    title: 'Asia',
    description:
      'Interactive Asia map with 54 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/asia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/asia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/asia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/asia.ts',
      },
    ],
  },
  {
    name: 'australia',
    type: 'registry:component',
    title: 'Australia',
    description:
      'Interactive Australia map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/australia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/australia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/australia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/australia.ts',
      },
    ],
  },
  {
    name: 'austria',
    type: 'registry:component',
    title: 'Austria',
    description:
      'Interactive Austria map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/austria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/austria.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/austria.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/austria.ts',
      },
    ],
  },
  {
    name: 'azerbaijan',
    type: 'registry:component',
    title: 'Azerbaijan',
    description:
      'Interactive Azerbaijan map with 79 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/azerbaijan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/azerbaijan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/azerbaijan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/azerbaijan.ts',
      },
    ],
  },
  {
    name: 'france',
    type: 'registry:component',
    title: 'France Map',
    description:
      'Interactive France map with 13 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/france.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/france.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/france.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/france.ts',
      },
    ],
  },
  {
    name: 'world',
    type: 'registry:component',
    title: 'World Map',
    description:
      'Interactive World map with 256 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/world.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/world.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/world.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/world.ts',
      },
    ],
  },
  {
    name: 'bahrain',
    type: 'registry:component',
    title: 'Bahrain',
    description:
      'Interactive Bahrain map with 5 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/bahrain.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/bahrain.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/bahrain.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/bahrain.ts',
      },
    ],
  },
  {
    name: 'bangladesh',
    type: 'registry:component',
    title: 'Bangladesh',
    description:
      'Interactive Bangladesh map with 7 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/bangladesh.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/bangladesh.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/bangladesh.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/bangladesh.ts',
      },
    ],
  },
  {
    name: 'belarus',
    type: 'registry:component',
    title: 'Belarus',
    description:
      'Interactive Belarus map with 7 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/belarus.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/belarus.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/belarus.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/belarus.ts',
      },
    ],
  },
  {
    name: 'belgium',
    type: 'registry:component',
    title: 'Belgium',
    description:
      'Interactive Belgium map with 11 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/belgium.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/belgium.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/belgium.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/belgium.ts',
      },
    ],
  },
  {
    name: 'bolivia',
    type: 'registry:component',
    title: 'Bolivia',
    description:
      'Interactive Bolivia map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/bolivia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/bolivia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/bolivia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/bolivia.ts',
      },
    ],
  },
  {
    name: 'brazil',
    type: 'registry:component',
    title: 'Brazil',
    description:
      'Interactive Brazil map with 27 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/brazil.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/brazil.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/brazil.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/brazil.ts',
      },
    ],
  },
  {
    name: 'bulgaria',
    type: 'registry:component',
    title: 'Bulgaria',
    description:
      'Interactive Bulgaria map with 28 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/bulgaria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/bulgaria.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/bulgaria.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/bulgaria.ts',
      },
    ],
  },
]
