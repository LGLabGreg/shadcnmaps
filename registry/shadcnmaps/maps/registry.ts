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
    name: 'africa',
    type: 'registry:component',
    title: 'Africa',
    description:
      'Interactive Africa map with 56 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('africa-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/africa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/africa.tsx',
      },
    ],
  },
  {
    name: 'alabama',
    type: 'registry:component',
    title: 'Alabama',
    description:
      'Interactive Alabama map with 68 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('alabama-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/alabama.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/alabama.tsx',
      },
    ],
  },
  {
    name: 'alaska',
    type: 'registry:component',
    title: 'Alaska',
    description:
      'Interactive Alaska map with 30 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('alaska-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/alaska.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/alaska.tsx',
      },
    ],
  },
  {
    name: 'algeria',
    type: 'registry:component',
    title: 'Algeria',
    description:
      'Interactive Algeria map with 49 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('algeria-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/algeria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/algeria.tsx',
      },
    ],
  },
  {
    name: 'angola',
    type: 'registry:component',
    title: 'Angola',
    description:
      'Interactive Angola map with 19 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('angola-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/angola.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/angola.tsx',
      },
    ],
  },
  {
    name: 'argentina',
    type: 'registry:component',
    title: 'Argentina',
    description:
      'Interactive Argentina map with 25 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('argentina-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/argentina.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/argentina.tsx',
      },
    ],
  },
  {
    name: 'arizona',
    type: 'registry:component',
    title: 'Arizona',
    description:
      'Interactive Arizona map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('arizona-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/arizona.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/arizona.tsx',
      },
    ],
  },
  {
    name: 'arkansas',
    type: 'registry:component',
    title: 'Arkansas',
    description:
      'Interactive Arkansas map with 76 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('arkansas-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/arkansas.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/arkansas.tsx',
      },
    ],
  },
  {
    name: 'asia',
    type: 'registry:component',
    title: 'Asia',
    description:
      'Interactive Asia map with 54 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('asia-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/asia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/asia.tsx',
      },
    ],
  },
  {
    name: 'australia',
    type: 'registry:component',
    title: 'Australia',
    description:
      'Interactive Australia map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('australia-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/australia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/australia.tsx',
      },
    ],
  },
  {
    name: 'austria',
    type: 'registry:component',
    title: 'Austria',
    description:
      'Interactive Austria map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('austria-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/austria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/austria.tsx',
      },
    ],
  },
  {
    name: 'azerbaijan',
    type: 'registry:component',
    title: 'Azerbaijan',
    description:
      'Interactive Azerbaijan map with 79 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map'), registryUrl('azerbaijan-data')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/azerbaijan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/azerbaijan.tsx',
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
