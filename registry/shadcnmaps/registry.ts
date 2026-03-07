export const components = [
  {
    name: 'map',
    type: 'registry:ui',
    title: 'Map',
    description:
      'Core SVG map renderer with region interaction, tooltips, and markers. Required by all map components.',
    cssVars: {
      light: {
        'map-region': 'oklch(44.3% 0.11 240.79)',
        'map-region-hover': 'oklch(50% 0.134 242.748)',
        'map-region-selected': 'oklch(39.1% 0.09 240.875)',
        'map-region-disabled': 'oklch(55.4% 0.046 257.417)',
        'map-region-stroke': 'oklch(28.2% 0.091 267.935)',
        'map-region-stroke-hover': 'oklch(28.2% 0.091 267.935)',
        'map-region-focus-ring': 'oklch(70.7% 0.165 254.624)',
        'map-label': 'oklch(100% 0 0)',
        'map-label-hover': 'oklch(100% 0 0)',
        'map-label-selected': 'oklch(100% 0 0)',
      },
      dark: {
        'map-region': 'oklch(44.3% 0.11 240.79)',
        'map-region-hover': 'oklch(50% 0.134 242.748)',
        'map-region-selected': 'oklch(39.1% 0.09 240.875)',
        'map-region-disabled': 'oklch(55.4% 0.046 257.417)',
        'map-region-stroke': 'oklch(28.2% 0.091 267.935)',
        'map-region-stroke-hover': 'oklch(28.2% 0.091 267.935)',
        'map-region-focus-ring': 'oklch(70.7% 0.165 254.624)',
        'map-label': 'oklch(100% 0 0)',
        'map-label-hover': 'oklch(100% 0 0)',
        'map-label-selected': 'oklch(100% 0 0)',
      },
    },
    files: [
      {
        path: 'registry/shadcnmaps/map.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-context.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-context.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-region.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-region.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-tooltip.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-tooltip.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-marker.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-marker.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-listbox.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-listbox.tsx',
      },
      {
        path: 'registry/shadcnmaps/map-controls.tsx',
        type: 'registry:file',
        target: 'components/shadcnmaps/map-controls.tsx',
      },
      {
        path: 'registry/shadcnmaps/types.ts',
        type: 'registry:file',
        target: 'components/shadcnmaps/types.ts',
      },
    ],
  },
]
