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
  {
    name: 'california',
    type: 'registry:component',
    title: 'California',
    description:
      'Interactive California map with 58 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/california.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/california.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/california.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/california.ts',
      },
    ],
  },
  {
    name: 'colorado',
    type: 'registry:component',
    title: 'Colorado',
    description:
      'Interactive Colorado map with 64 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/colorado.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/colorado.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/colorado.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/colorado.ts',
      },
    ],
  },
  {
    name: 'cameroon',
    type: 'registry:component',
    title: 'Cameroon',
    description:
      'Interactive Cameroon map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/cameroon.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/cameroon.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/cameroon.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/cameroon.ts',
      },
    ],
  },
  {
    name: 'central-america',
    type: 'registry:component',
    title: 'Central America',
    description:
      'Interactive Central America map with 7 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/central-america.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/central-america.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/central-america.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/central-america.ts',
      },
    ],
  },
  {
    name: 'canada',
    type: 'registry:component',
    title: 'Canada',
    description:
      'Interactive Canada map with 13 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/canada.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/canada.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/canada.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/canada.ts',
      },
    ],
  },
  {
    name: 'caribbean',
    type: 'registry:component',
    title: 'Caribbean',
    description:
      'Interactive Caribbean map with 35 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/caribbean.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/caribbean.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/caribbean.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/caribbean.ts',
      },
    ],
  },
  {
    name: 'china',
    type: 'registry:component',
    title: 'China',
    description:
      'Interactive China map with 32 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/china.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/china.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/china.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/china.ts',
      },
    ],
  },
  {
    name: 'colombia',
    type: 'registry:component',
    title: 'Colombia',
    description:
      'Interactive Colombia map with 33 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/colombia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/colombia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/colombia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/colombia.ts',
      },
    ],
  },
  {
    name: 'connecticut',
    type: 'registry:component',
    title: 'Connecticut',
    description:
      'Interactive Connecticut map with 8 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/connecticut.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/connecticut.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/connecticut.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/connecticut.ts',
      },
    ],
  },
  {
    name: 'costa-rica',
    type: 'registry:component',
    title: 'Costa Rica',
    description:
      'Interactive Costa Rica map with 7 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/costa-rica.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/costa-rica.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/costa-rica.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/costa-rica.ts',
      },
    ],
  },
  {
    name: 'cote-ivoire',
    type: 'registry:component',
    title: "Côte d'Ivoire",
    description:
      "Interactive Côte d'Ivoire map with 19 regions. Supports click, hover, selection, tooltips, and custom markers.",
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/cote-ivoire.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/cote-ivoire.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/cote-ivoire.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/cote-ivoire.ts',
      },
    ],
  },
  {
    name: 'croatia',
    type: 'registry:component',
    title: 'Croatia',
    description:
      'Interactive Croatia map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/croatia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/croatia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/croatia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/croatia.ts',
      },
    ],
  },
  {
    name: 'cuba',
    type: 'registry:component',
    title: 'Cuba',
    description:
      'Interactive Cuba map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/cuba.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/cuba.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/cuba.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/cuba.ts',
      },
    ],
  },
  {
    name: 'czech-republic',
    type: 'registry:component',
    title: 'Czech Republic',
    description:
      'Interactive Czech Republic map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/czech-republic.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/czech-republic.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/czech-republic.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/czech-republic.ts',
      },
    ],
  },
  {
    name: 'democratic-republic-congo',
    type: 'registry:component',
    title: 'Democratic Republic of the Congo',
    description:
      'Interactive Democratic Republic of the Congo map with 11 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/democratic-republic-congo.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/democratic-republic-congo.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/democratic-republic-congo.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/democratic-republic-congo.ts',
      },
    ],
  },
  {
    name: 'denmark',
    type: 'registry:component',
    title: 'Denmark',
    description:
      'Interactive Denmark map with 98 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/denmark.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/denmark.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/denmark.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/denmark.ts',
      },
    ],
  },
  {
    name: 'dominican-republic',
    type: 'registry:component',
    title: 'Dominican Republic',
    description:
      'Interactive Dominican Republic map with 32 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/dominican-republic.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/dominican-republic.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/dominican-republic.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/dominican-republic.ts',
      },
    ],
  },
  {
    name: 'ecuador',
    type: 'registry:component',
    title: 'Ecuador',
    description:
      'Interactive Ecuador map with 24 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ecuador.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ecuador.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ecuador.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ecuador.ts',
      },
    ],
  },
  {
    name: 'egypt',
    type: 'registry:component',
    title: 'Egypt',
    description:
      'Interactive Egypt map with 27 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/egypt.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/egypt.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/egypt.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/egypt.ts',
      },
    ],
  },
  {
    name: 'el-salvador',
    type: 'registry:component',
    title: 'El Salvador',
    description:
      'Interactive El Salvador map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/el-salvador.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/el-salvador.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/el-salvador.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/el-salvador.ts',
      },
    ],
  },
  {
    name: 'estonia',
    type: 'registry:component',
    title: 'Estonia',
    description:
      'Interactive Estonia map with 15 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/estonia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/estonia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/estonia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/estonia.ts',
      },
    ],
  },
  {
    name: 'ethiopia',
    type: 'registry:component',
    title: 'Ethiopia',
    description:
      'Interactive Ethiopia map with 11 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ethiopia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ethiopia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ethiopia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ethiopia.ts',
      },
    ],
  },
  {
    name: 'finland',
    type: 'registry:component',
    title: 'Finland',
    description:
      'Interactive Finland map with 18 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/finland.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/finland.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/finland.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/finland.ts',
      },
    ],
  },
  {
    name: 'germany',
    type: 'registry:component',
    title: 'Germany',
    description:
      'Interactive Germany map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/germany.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/germany.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/germany.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/germany.ts',
      },
    ],
  },
  {
    name: 'ghana',
    type: 'registry:component',
    title: 'Ghana',
    description:
      'Interactive Ghana map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ghana.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ghana.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ghana.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ghana.ts',
      },
    ],
  },
  {
    name: 'greece',
    type: 'registry:component',
    title: 'Greece',
    description:
      'Interactive Greece map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/greece.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/greece.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/greece.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/greece.ts',
      },
    ],
  },
  {
    name: 'guatemala',
    type: 'registry:component',
    title: 'Guatemala',
    description:
      'Interactive Guatemala map with 22 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/guatemala.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/guatemala.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/guatemala.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/guatemala.ts',
      },
    ],
  },
  {
    name: 'honduras',
    type: 'registry:component',
    title: 'Honduras',
    description:
      'Interactive Honduras map with 18 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/honduras.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/honduras.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/honduras.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/honduras.ts',
      },
    ],
  },
  {
    name: 'hungary',
    type: 'registry:component',
    title: 'Hungary',
    description:
      'Interactive Hungary map with 43 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/hungary.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/hungary.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/hungary.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/hungary.ts',
      },
    ],
  },
  {
    name: 'india',
    type: 'registry:component',
    title: 'India',
    description:
      'Interactive India map with 36 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/india.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/india.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/india.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/india.ts',
      },
    ],
  },
  {
    name: 'indonesia',
    type: 'registry:component',
    title: 'Indonesia',
    description:
      'Interactive Indonesia map with 33 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/indonesia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/indonesia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/indonesia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/indonesia.ts',
      },
    ],
  },
  {
    name: 'iran',
    type: 'registry:component',
    title: 'Iran',
    description:
      'Interactive Iran map with 31 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/iran.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/iran.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/iran.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/iran.ts',
      },
    ],
  },
  {
    name: 'iraq',
    type: 'registry:component',
    title: 'Iraq',
    description:
      'Interactive Iraq map with 18 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/iraq.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/iraq.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/iraq.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/iraq.ts',
      },
    ],
  },
  {
    name: 'ireland',
    type: 'registry:component',
    title: 'Ireland',
    description:
      'Interactive Ireland map with 34 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ireland.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ireland.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ireland.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ireland.ts',
      },
    ],
  },
  {
    name: 'israel',
    type: 'registry:component',
    title: 'Israel',
    description:
      'Interactive Israel map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/israel.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/israel.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/israel.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/israel.ts',
      },
    ],
  },
  {
    name: 'italy',
    type: 'registry:component',
    title: 'Italy',
    description:
      'Interactive Italy map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/italy.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/italy.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/italy.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/italy.ts',
      },
    ],
  },
  {
    name: 'japan',
    type: 'registry:component',
    title: 'Japan',
    description:
      'Interactive Japan map with 47 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/japan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/japan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/japan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/japan.ts',
      },
    ],
  },
  {
    name: 'jordan',
    type: 'registry:component',
    title: 'Jordan',
    description:
      'Interactive Jordan map with 12 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/jordan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/jordan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/jordan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/jordan.ts',
      },
    ],
  },
  {
    name: 'kazakhstan',
    type: 'registry:component',
    title: 'Kazakhstan',
    description:
      'Interactive Kazakhstan map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/kazakhstan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/kazakhstan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/kazakhstan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/kazakhstan.ts',
      },
    ],
  },
  {
    name: 'kenya',
    type: 'registry:component',
    title: 'Kenya',
    description:
      'Interactive Kenya map with 8 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/kenya.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/kenya.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/kenya.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/kenya.ts',
      },
    ],
  },
  {
    name: 'kuwait',
    type: 'registry:component',
    title: 'Kuwait',
    description:
      'Interactive Kuwait map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/kuwait.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/kuwait.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/kuwait.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/kuwait.ts',
      },
    ],
  },
  {
    name: 'latvia',
    type: 'registry:component',
    title: 'Latvia',
    description:
      'Interactive Latvia map with 119 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/latvia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/latvia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/latvia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/latvia.ts',
      },
    ],
  },
  {
    name: 'lebanon',
    type: 'registry:component',
    title: 'Lebanon',
    description:
      'Interactive Lebanon map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/lebanon.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/lebanon.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/lebanon.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/lebanon.ts',
      },
    ],
  },
  {
    name: 'libya',
    type: 'registry:component',
    title: 'Libya',
    description:
      'Interactive Libya map with 22 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/libya.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/libya.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/libya.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/libya.ts',
      },
    ],
  },
  {
    name: 'lithuania',
    type: 'registry:component',
    title: 'Lithuania',
    description:
      'Interactive Lithuania map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/lithuania.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/lithuania.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/lithuania.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/lithuania.ts',
      },
    ],
  },
  {
    name: 'luxembourg',
    type: 'registry:component',
    title: 'Luxembourg',
    description:
      'Interactive Luxembourg map with 3 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/luxembourg.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/luxembourg.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/luxembourg.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/luxembourg.ts',
      },
    ],
  },
  {
    name: 'macau',
    type: 'registry:component',
    title: 'Macau',
    description:
      'Interactive Macau map with 8 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/macau.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/macau.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/macau.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/macau.ts',
      },
    ],
  },
  {
    name: 'malaysia',
    type: 'registry:component',
    title: 'Malaysia',
    description:
      'Interactive Malaysia map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/malaysia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/malaysia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/malaysia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/malaysia.ts',
      },
    ],
  },
  {
    name: 'mexico',
    type: 'registry:component',
    title: 'Mexico',
    description:
      'Interactive Mexico map with 32 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/mexico.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/mexico.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/mexico.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/mexico.ts',
      },
    ],
  },
  {
    name: 'monaco',
    type: 'registry:component',
    title: 'Monaco',
    description:
      'Interactive Monaco map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/monaco.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/monaco.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/monaco.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/monaco.ts',
      },
    ],
  },
  {
    name: 'morocco',
    type: 'registry:component',
    title: 'Morocco',
    description:
      'Interactive Morocco map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/morocco.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/morocco.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/morocco.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/morocco.ts',
      },
    ],
  },
  {
    name: 'myanmar',
    type: 'registry:component',
    title: 'Myanmar',
    description:
      'Interactive Myanmar map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/myanmar.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/myanmar.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/myanmar.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/myanmar.ts',
      },
    ],
  },
  {
    name: 'nepal',
    type: 'registry:component',
    title: 'Nepal',
    description:
      'Interactive Nepal map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/nepal.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/nepal.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/nepal.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/nepal.ts',
      },
    ],
  },
  {
    name: 'netherlands',
    type: 'registry:component',
    title: 'Netherlands',
    description:
      'Interactive Netherlands map with 12 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/netherlands.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/netherlands.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/netherlands.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/netherlands.ts',
      },
    ],
  },
  {
    name: 'new-zealand',
    type: 'registry:component',
    title: 'New Zealand',
    description:
      'Interactive New Zealand map with 19 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-zealand.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-zealand.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-zealand.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-zealand.ts',
      },
    ],
  },
  {
    name: 'nigeria',
    type: 'registry:component',
    title: 'Nigeria',
    description:
      'Interactive Nigeria map with 37 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/nigeria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/nigeria.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/nigeria.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/nigeria.ts',
      },
    ],
  },
  {
    name: 'norway',
    type: 'registry:component',
    title: 'Norway',
    description:
      'Interactive Norway map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/norway.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/norway.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/norway.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/norway.ts',
      },
    ],
  },
  {
    name: 'oman',
    type: 'registry:component',
    title: 'Oman',
    description:
      'Interactive Oman map with 11 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/oman.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/oman.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/oman.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/oman.ts',
      },
    ],
  },
  {
    name: 'pakistan',
    type: 'registry:component',
    title: 'Pakistan',
    description:
      'Interactive Pakistan map with 8 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/pakistan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/pakistan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/pakistan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/pakistan.ts',
      },
    ],
  },
  {
    name: 'panama',
    type: 'registry:component',
    title: 'Panama',
    description:
      'Interactive Panama map with 12 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/panama.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/panama.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/panama.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/panama.ts',
      },
    ],
  },
  {
    name: 'paraguay',
    type: 'registry:component',
    title: 'Paraguay',
    description:
      'Interactive Paraguay map with 18 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/paraguay.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/paraguay.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/paraguay.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/paraguay.ts',
      },
    ],
  },
  {
    name: 'peru',
    type: 'registry:component',
    title: 'Peru',
    description:
      'Interactive Peru map with 26 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/peru.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/peru.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/peru.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/peru.ts',
      },
    ],
  },
  {
    name: 'philippines',
    type: 'registry:component',
    title: 'Philippines',
    description:
      'Interactive Philippines map with 119 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/philippines.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/philippines.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/philippines.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/philippines.ts',
      },
    ],
  },
  {
    name: 'poland',
    type: 'registry:component',
    title: 'Poland',
    description:
      'Interactive Poland map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/poland.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/poland.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/poland.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/poland.ts',
      },
    ],
  },
  {
    name: 'portugal',
    type: 'registry:component',
    title: 'Portugal',
    description:
      'Interactive Portugal map with 20 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/portugal.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/portugal.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/portugal.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/portugal.ts',
      },
    ],
  },
  {
    name: 'puerto-rico',
    type: 'registry:component',
    title: 'Puerto Rico',
    description:
      'Interactive Puerto Rico map with 78 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/puerto-rico.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/puerto-rico.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/puerto-rico.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/puerto-rico.ts',
      },
    ],
  },
  {
    name: 'qatar',
    type: 'registry:component',
    title: 'Qatar',
    description:
      'Interactive Qatar map with 7 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/qatar.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/qatar.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/qatar.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/qatar.ts',
      },
    ],
  },
  {
    name: 'romania',
    type: 'registry:component',
    title: 'Romania',
    description:
      'Interactive Romania map with 42 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/romania.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/romania.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/romania.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/romania.ts',
      },
    ],
  },
  {
    name: 'russia',
    type: 'registry:component',
    title: 'Russia',
    description:
      'Interactive Russia map with 85 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/russia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/russia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/russia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/russia.ts',
      },
    ],
  },
  {
    name: 'saudi-arabia',
    type: 'registry:component',
    title: 'Saudi Arabia',
    description:
      'Interactive Saudi Arabia map with 13 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/saudi-arabia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/saudi-arabia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/saudi-arabia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/saudi-arabia.ts',
      },
    ],
  },
  {
    name: 'serbia',
    type: 'registry:component',
    title: 'Serbia',
    description:
      'Interactive Serbia map with 25 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/serbia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/serbia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/serbia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/serbia.ts',
      },
    ],
  },
  {
    name: 'singapore',
    type: 'registry:component',
    title: 'Singapore',
    description:
      'Interactive Singapore map with 5 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/singapore.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/singapore.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/singapore.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/singapore.ts',
      },
    ],
  },
  {
    name: 'slovakia',
    type: 'registry:component',
    title: 'Slovakia',
    description:
      'Interactive Slovakia map with 8 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/slovakia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/slovakia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/slovakia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/slovakia.ts',
      },
    ],
  },
  {
    name: 'slovenia',
    type: 'registry:component',
    title: 'Slovenia',
    description:
      'Interactive Slovenia map with 193 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/slovenia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/slovenia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/slovenia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/slovenia.ts',
      },
    ],
  },
  {
    name: 'south-africa',
    type: 'registry:component',
    title: 'South Africa',
    description:
      'Interactive South Africa map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/south-africa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/south-africa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/south-africa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/south-africa.ts',
      },
    ],
  },
  {
    name: 'south-korea',
    type: 'registry:component',
    title: 'South Korea',
    description:
      'Interactive South Korea map with 17 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/south-korea.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/south-korea.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/south-korea.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/south-korea.ts',
      },
    ],
  },
  {
    name: 'spain',
    type: 'registry:component',
    title: 'Spain',
    description:
      'Interactive Spain map with 17 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/spain.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/spain.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/spain.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/spain.ts',
      },
    ],
  },
  {
    name: 'sri-lanka',
    type: 'registry:component',
    title: 'Sri Lanka',
    description:
      'Interactive Sri Lanka map with 25 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/sri-lanka.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/sri-lanka.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/sri-lanka.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/sri-lanka.ts',
      },
    ],
  },
  {
    name: 'sudan',
    type: 'registry:component',
    title: 'Sudan',
    description:
      'Interactive Sudan map with 17 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/sudan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/sudan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/sudan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/sudan.ts',
      },
    ],
  },
  {
    name: 'sweden',
    type: 'registry:component',
    title: 'Sweden',
    description:
      'Interactive Sweden map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/sweden.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/sweden.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/sweden.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/sweden.ts',
      },
    ],
  },
  {
    name: 'switzerland',
    type: 'registry:component',
    title: 'Switzerland',
    description:
      'Interactive Switzerland map with 26 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/switzerland.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/switzerland.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/switzerland.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/switzerland.ts',
      },
    ],
  },
  {
    name: 'syria',
    type: 'registry:component',
    title: 'Syria',
    description:
      'Interactive Syria map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/syria.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/syria.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/syria.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/syria.ts',
      },
    ],
  },
  {
    name: 'taiwan',
    type: 'registry:component',
    title: 'Taiwan',
    description:
      'Interactive Taiwan map with 22 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/taiwan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/taiwan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/taiwan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/taiwan.ts',
      },
    ],
  },
  {
    name: 'tanzania',
    type: 'registry:component',
    title: 'Tanzania',
    description:
      'Interactive Tanzania map with 30 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/tanzania.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/tanzania.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/tanzania.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/tanzania.ts',
      },
    ],
  },
  {
    name: 'thailand',
    type: 'registry:component',
    title: 'Thailand',
    description:
      'Interactive Thailand map with 77 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/thailand.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/thailand.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/thailand.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/thailand.ts',
      },
    ],
  },
  {
    name: 'trinidad-and-tobago',
    type: 'registry:component',
    title: 'Trinidad and Tobago',
    description:
      'Interactive Trinidad and Tobago map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/trinidad-and-tobago.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/trinidad-and-tobago.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/trinidad-and-tobago.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/trinidad-and-tobago.ts',
      },
    ],
  },
  {
    name: 'tunisia',
    type: 'registry:component',
    title: 'Tunisia',
    description:
      'Interactive Tunisia map with 23 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/tunisia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/tunisia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/tunisia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/tunisia.ts',
      },
    ],
  },
  {
    name: 'turkey',
    type: 'registry:component',
    title: 'Turkey',
    description:
      'Interactive Turkey map with 81 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/turkey.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/turkey.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/turkey.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/turkey.ts',
      },
    ],
  },
  {
    name: 'turkmenistan',
    type: 'registry:component',
    title: 'Turkmenistan',
    description:
      'Interactive Turkmenistan map with 5 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/turkmenistan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/turkmenistan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/turkmenistan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/turkmenistan.ts',
      },
    ],
  },
  {
    name: 'uae',
    type: 'registry:component',
    title: 'United Arab Emirates',
    description:
      'Interactive United Arab Emirates map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/uae.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/uae.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/uae.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/uae.ts',
      },
    ],
  },
  {
    name: 'uganda',
    type: 'registry:component',
    title: 'Uganda',
    description:
      'Interactive Uganda map with 112 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/uganda.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/uganda.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/uganda.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/uganda.ts',
      },
    ],
  },
  {
    name: 'uk',
    type: 'registry:component',
    title: 'United Kingdom',
    description:
      'Interactive United Kingdom map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/uk.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/uk.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/uk.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/uk.ts',
      },
    ],
  },
  {
    name: 'ukraine',
    type: 'registry:component',
    title: 'Ukraine',
    description:
      'Interactive Ukraine map with 27 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ukraine.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ukraine.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ukraine.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ukraine.ts',
      },
    ],
  },
  {
    name: 'uruguay',
    type: 'registry:component',
    title: 'Uruguay',
    description:
      'Interactive Uruguay map with 19 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/uruguay.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/uruguay.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/uruguay.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/uruguay.ts',
      },
    ],
  },
  {
    name: 'uzbekistan',
    type: 'registry:component',
    title: 'Uzbekistan',
    description:
      'Interactive Uzbekistan map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/uzbekistan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/uzbekistan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/uzbekistan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/uzbekistan.ts',
      },
    ],
  },
  {
    name: 'venezuela',
    type: 'registry:component',
    title: 'Venezuela',
    description:
      'Interactive Venezuela map with 25 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/venezuela.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/venezuela.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/venezuela.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/venezuela.ts',
      },
    ],
  },
  {
    name: 'vietnam',
    type: 'registry:component',
    title: 'Vietnam',
    description:
      'Interactive Vietnam map with 63 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/vietnam.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/vietnam.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/vietnam.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/vietnam.ts',
      },
    ],
  },
  {
    name: 'yemen',
    type: 'registry:component',
    title: 'Yemen',
    description:
      'Interactive Yemen map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/yemen.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/yemen.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/yemen.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/yemen.ts',
      },
    ],
  },
  {
    name: 'zambia',
    type: 'registry:component',
    title: 'Zambia',
    description:
      'Interactive Zambia map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/zambia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/zambia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/zambia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/zambia.ts',
      },
    ],
  },
  {
    name: 'zimbabwe',
    type: 'registry:component',
    title: 'Zimbabwe',
    description:
      'Interactive Zimbabwe map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/zimbabwe.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/zimbabwe.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/zimbabwe.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/zimbabwe.ts',
      },
    ],
  },
  {
    name: 'continents',
    type: 'registry:component',
    title: 'Continents',
    description:
      'Interactive Continents map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/continents.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/continents.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/continents.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/continents.ts',
      },
    ],
  },
  {
    name: 'europe',
    type: 'registry:component',
    title: 'Europe',
    description:
      'Interactive Europe map with 62 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/europe.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/europe.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/europe.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/europe.ts',
      },
    ],
  },
  {
    name: 'european-union',
    type: 'registry:component',
    title: 'European Union',
    description:
      'Interactive European Union map with 28 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/european-union.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/european-union.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/european-union.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/european-union.ts',
      },
    ],
  },
  {
    name: 'middle-east',
    type: 'registry:component',
    title: 'Middle East',
    description:
      'Interactive Middle East map with 17 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/middle-east.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/middle-east.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/middle-east.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/middle-east.ts',
      },
    ],
  },
  {
    name: 'north-africa',
    type: 'registry:component',
    title: 'North Africa',
    description:
      'Interactive North Africa map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/north-africa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/north-africa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/north-africa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/north-africa.ts',
      },
    ],
  },
  {
    name: 'north-america',
    type: 'registry:component',
    title: 'North America',
    description:
      'Interactive North America map with 29 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/north-america.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/north-america.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/north-america.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/north-america.ts',
      },
    ],
  },
  {
    name: 'south-america',
    type: 'registry:component',
    title: 'South America',
    description:
      'Interactive South America map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/south-america.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/south-america.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/south-america.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/south-america.ts',
      },
    ],
  },
  {
    name: 'world-jammu-kashmir',
    type: 'registry:component',
    title: 'World (Jammu & Kashmir)',
    description:
      'Interactive World (Jammu & Kashmir) map with 257 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/world-jammu-kashmir.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/world-jammu-kashmir.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/world-jammu-kashmir.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/world-jammu-kashmir.ts',
      },
    ],
  },
  {
    name: 'delaware',
    type: 'registry:component',
    title: 'Delaware',
    description:
      'Interactive Delaware map with 3 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/delaware.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/delaware.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/delaware.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/delaware.ts',
      },
    ],
  },
  {
    name: 'florida',
    type: 'registry:component',
    title: 'Florida',
    description:
      'Interactive Florida map with 67 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/florida.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/florida.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/florida.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/florida.ts',
      },
    ],
  },
  {
    name: 'georgia',
    type: 'registry:component',
    title: 'Georgia',
    description:
      'Interactive Georgia map with 159 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/georgia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/georgia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/georgia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/georgia.ts',
      },
    ],
  },
  {
    name: 'hawaii',
    type: 'registry:component',
    title: 'Hawaii',
    description:
      'Interactive Hawaii map with 5 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/hawaii.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/hawaii.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/hawaii.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/hawaii.ts',
      },
    ],
  },
  {
    name: 'idaho',
    type: 'registry:component',
    title: 'Idaho',
    description:
      'Interactive Idaho map with 44 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/idaho.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/idaho.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/idaho.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/idaho.ts',
      },
    ],
  },
  {
    name: 'illinois',
    type: 'registry:component',
    title: 'Illinois',
    description:
      'Interactive Illinois map with 102 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/illinois.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/illinois.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/illinois.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/illinois.ts',
      },
    ],
  },
  {
    name: 'indiana',
    type: 'registry:component',
    title: 'Indiana',
    description:
      'Interactive Indiana map with 92 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/indiana.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/indiana.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/indiana.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/indiana.ts',
      },
    ],
  },
  {
    name: 'iowa',
    type: 'registry:component',
    title: 'Iowa',
    description:
      'Interactive Iowa map with 99 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/iowa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/iowa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/iowa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/iowa.ts',
      },
    ],
  },
  {
    name: 'kansas',
    type: 'registry:component',
    title: 'Kansas',
    description:
      'Interactive Kansas map with 105 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/kansas.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/kansas.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/kansas.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/kansas.ts',
      },
    ],
  },
  {
    name: 'kentucky',
    type: 'registry:component',
    title: 'Kentucky',
    description:
      'Interactive Kentucky map with 120 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/kentucky.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/kentucky.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/kentucky.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/kentucky.ts',
      },
    ],
  },
  {
    name: 'louisiana',
    type: 'registry:component',
    title: 'Louisiana',
    description:
      'Interactive Louisiana map with 64 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/louisiana.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/louisiana.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/louisiana.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/louisiana.ts',
      },
    ],
  },
  {
    name: 'maine',
    type: 'registry:component',
    title: 'Maine',
    description:
      'Interactive Maine map with 16 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/maine.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/maine.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/maine.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/maine.ts',
      },
    ],
  },
  {
    name: 'maryland',
    type: 'registry:component',
    title: 'Maryland',
    description:
      'Interactive Maryland map with 24 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/maryland.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/maryland.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/maryland.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/maryland.ts',
      },
    ],
  },
  {
    name: 'massachusetts',
    type: 'registry:component',
    title: 'Massachusetts',
    description:
      'Interactive Massachusetts map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/massachusetts.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/massachusetts.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/massachusetts.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/massachusetts.ts',
      },
    ],
  },
  {
    name: 'michigan',
    type: 'registry:component',
    title: 'Michigan',
    description:
      'Interactive Michigan map with 83 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/michigan.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/michigan.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/michigan.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/michigan.ts',
      },
    ],
  },
  {
    name: 'minnesota',
    type: 'registry:component',
    title: 'Minnesota',
    description:
      'Interactive Minnesota map with 87 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/minnesota.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/minnesota.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/minnesota.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/minnesota.ts',
      },
    ],
  },
  {
    name: 'mississippi',
    type: 'registry:component',
    title: 'Mississippi',
    description:
      'Interactive Mississippi map with 82 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/mississippi.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/mississippi.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/mississippi.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/mississippi.ts',
      },
    ],
  },
  {
    name: 'missouri',
    type: 'registry:component',
    title: 'Missouri',
    description:
      'Interactive Missouri map with 115 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/missouri.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/missouri.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/missouri.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/missouri.ts',
      },
    ],
  },
  {
    name: 'montana',
    type: 'registry:component',
    title: 'Montana',
    description:
      'Interactive Montana map with 56 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/montana.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/montana.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/montana.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/montana.ts',
      },
    ],
  },
  {
    name: 'nebraska',
    type: 'registry:component',
    title: 'Nebraska',
    description:
      'Interactive Nebraska map with 93 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/nebraska.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/nebraska.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/nebraska.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/nebraska.ts',
      },
    ],
  },
  {
    name: 'nevada',
    type: 'registry:component',
    title: 'Nevada',
    description:
      'Interactive Nevada map with 17 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/nevada.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/nevada.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/nevada.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/nevada.ts',
      },
    ],
  },
  {
    name: 'new-hampshire',
    type: 'registry:component',
    title: 'New Hampshire',
    description:
      'Interactive New Hampshire map with 10 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-hampshire.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-hampshire.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-hampshire.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-hampshire.ts',
      },
    ],
  },
  {
    name: 'new-jersey',
    type: 'registry:component',
    title: 'New Jersey',
    description:
      'Interactive New Jersey map with 21 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-jersey.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-jersey.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-jersey.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-jersey.ts',
      },
    ],
  },
  {
    name: 'new-mexico',
    type: 'registry:component',
    title: 'New Mexico',
    description:
      'Interactive New Mexico map with 33 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-mexico.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-mexico.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-mexico.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-mexico.ts',
      },
    ],
  },
  {
    name: 'new-york',
    type: 'registry:component',
    title: 'New York',
    description:
      'Interactive New York map with 62 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-york.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-york.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-york.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-york.ts',
      },
    ],
  },
  {
    name: 'north-carolina',
    type: 'registry:component',
    title: 'North Carolina',
    description:
      'Interactive North Carolina map with 100 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/north-carolina.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/north-carolina.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/north-carolina.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/north-carolina.ts',
      },
    ],
  },
  {
    name: 'north-dakota',
    type: 'registry:component',
    title: 'North Dakota',
    description:
      'Interactive North Dakota map with 53 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/north-dakota.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/north-dakota.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/north-dakota.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/north-dakota.ts',
      },
    ],
  },
  {
    name: 'ohio',
    type: 'registry:component',
    title: 'Ohio',
    description:
      'Interactive Ohio map with 88 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/ohio.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/ohio.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/ohio.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/ohio.ts',
      },
    ],
  },
  {
    name: 'oklahoma',
    type: 'registry:component',
    title: 'Oklahoma',
    description:
      'Interactive Oklahoma map with 77 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/oklahoma.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/oklahoma.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/oklahoma.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/oklahoma.ts',
      },
    ],
  },
  {
    name: 'oregon',
    type: 'registry:component',
    title: 'Oregon',
    description:
      'Interactive Oregon map with 36 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/oregon.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/oregon.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/oregon.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/oregon.ts',
      },
    ],
  },
  {
    name: 'pennsylvania',
    type: 'registry:component',
    title: 'Pennsylvania',
    description:
      'Interactive Pennsylvania map with 67 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/pennsylvania.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/pennsylvania.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/pennsylvania.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/pennsylvania.ts',
      },
    ],
  },
  {
    name: 'rhode-island',
    type: 'registry:component',
    title: 'Rhode Island',
    description:
      'Interactive Rhode Island map with 5 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/rhode-island.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/rhode-island.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/rhode-island.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/rhode-island.ts',
      },
    ],
  },
  {
    name: 'south-carolina',
    type: 'registry:component',
    title: 'South Carolina',
    description:
      'Interactive South Carolina map with 46 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/south-carolina.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/south-carolina.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/south-carolina.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/south-carolina.ts',
      },
    ],
  },
  {
    name: 'south-dakota',
    type: 'registry:component',
    title: 'South Dakota',
    description:
      'Interactive South Dakota map with 66 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/south-dakota.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/south-dakota.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/south-dakota.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/south-dakota.ts',
      },
    ],
  },
  {
    name: 'tennessee',
    type: 'registry:component',
    title: 'Tennessee',
    description:
      'Interactive Tennessee map with 95 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/tennessee.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/tennessee.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/tennessee.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/tennessee.ts',
      },
    ],
  },
  {
    name: 'texas',
    type: 'registry:component',
    title: 'Texas',
    description:
      'Interactive Texas map with 254 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/texas.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/texas.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/texas.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/texas.ts',
      },
    ],
  },
  {
    name: 'utah',
    type: 'registry:component',
    title: 'Utah',
    description:
      'Interactive Utah map with 29 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/utah.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/utah.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/utah.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/utah.ts',
      },
    ],
  },
  {
    name: 'vermont',
    type: 'registry:component',
    title: 'Vermont',
    description:
      'Interactive Vermont map with 14 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/vermont.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/vermont.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/vermont.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/vermont.ts',
      },
    ],
  },
  {
    name: 'virginia',
    type: 'registry:component',
    title: 'Virginia',
    description:
      'Interactive Virginia map with 134 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/virginia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/virginia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/virginia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/virginia.ts',
      },
    ],
  },
  {
    name: 'washington',
    type: 'registry:component',
    title: 'Washington',
    description:
      'Interactive Washington map with 39 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/washington.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/washington.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/washington.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/washington.ts',
      },
    ],
  },
  {
    name: 'west-virginia',
    type: 'registry:component',
    title: 'West Virginia',
    description:
      'Interactive West Virginia map with 55 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/west-virginia.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/west-virginia.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/west-virginia.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/west-virginia.ts',
      },
    ],
  },
  {
    name: 'wisconsin',
    type: 'registry:component',
    title: 'Wisconsin',
    description:
      'Interactive Wisconsin map with 72 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/wisconsin.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/wisconsin.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/wisconsin.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/wisconsin.ts',
      },
    ],
  },
  {
    name: 'wyoming',
    type: 'registry:component',
    title: 'Wyoming',
    description:
      'Interactive Wyoming map with 23 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/wyoming.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/wyoming.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/wyoming.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/wyoming.ts',
      },
    ],
  },
  {
    name: 'france-departements',
    type: 'registry:component',
    title: 'France Départements',
    description:
      'Interactive France Départements map with 101 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/france-departements.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/france-departements.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/france-departements.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/france-departements.ts',
      },
    ],
  },
  {
    name: 'london-boroughs',
    type: 'registry:component',
    title: 'London Boroughs',
    description:
      'Interactive London Boroughs map with 33 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/london-boroughs.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/london-boroughs.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/london-boroughs.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/london-boroughs.ts',
      },
    ],
  },
  {
    name: 'new-york-city-boroughs',
    type: 'registry:component',
    title: 'New York City Boroughs',
    description:
      'Interactive New York City Boroughs map with 6 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/new-york-city-boroughs.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/new-york-city-boroughs.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/new-york-city-boroughs.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/new-york-city-boroughs.ts',
      },
    ],
  },
  {
    name: 'northeast-usa',
    type: 'registry:component',
    title: 'Northeast USA',
    description:
      'Interactive Northeast USA map with 9 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/northeast-usa.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/northeast-usa.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/northeast-usa.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/northeast-usa.ts',
      },
    ],
  },
  {
    name: 'palestine-israel',
    type: 'registry:component',
    title: 'Palestine & Israel',
    description:
      'Interactive Palestine & Israel map with 23 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/palestine-israel.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/palestine-israel.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/palestine-israel.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/palestine-israel.ts',
      },
    ],
  },
  {
    name: 'usa-canada',
    type: 'registry:component',
    title: 'USA & Canada',
    description:
      'Interactive USA & Canada map with 63 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/usa-canada.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/usa-canada.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/usa-canada.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/usa-canada.ts',
      },
    ],
  },
  {
    name: 'usa-territories',
    type: 'registry:component',
    title: 'USA Territories',
    description:
      'Interactive USA Territories map with 60 regions. Supports click, hover, selection, tooltips, and custom markers.',
    registryDependencies: [registryUrl('map')],
    files: [
      {
        path: 'registry/shadcnmaps/maps/usa-territories.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/maps/usa-territories.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-data/usa-territories.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-data/usa-territories.ts',
      },
    ],
  },
]
