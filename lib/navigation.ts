export interface NavItem {
  title: string
  href: string
}

export interface NavSubGroup {
  title: string
  items: NavItem[]
}

export interface NavSection {
  title: string
  href?: string
  hideLabel?: boolean
  items?: NavItem[]
  groups?: NavSubGroup[]
}

export const navigation: NavSection[] = [
  {
    title: 'Documentation',
    hideLabel: true,
    items: [
      { title: 'Getting Started', href: '/overview/getting-started' },
      { title: 'Theming', href: '/overview/theming' },
      { title: 'API Reference', href: '/overview/api-reference' },
      { title: 'LLMs', href: '/overview/llms' },
      { title: 'Zoom & Pan', href: '/overview/zoom-pan' },
      { title: 'Marker Generator', href: '/tools/marker-generator' },
      { title: 'Search Maps', href: '/maps' },
    ],
  },
  {
    title: 'Maps',
    href: '/maps',
    groups: [
      {
        title: 'Regions & Continents',
        items: [
          { title: 'Africa', href: '/maps/africa' },
          { title: 'Asia', href: '/maps/asia' },
          { title: 'World', href: '/maps/world' },
        ],
      },
      {
        title: 'Countries',
        items: [
          { title: 'Algeria', href: '/maps/algeria' },
          { title: 'Angola', href: '/maps/angola' },
          { title: 'Argentina', href: '/maps/argentina' },
          { title: 'Australia', href: '/maps/australia' },
          { title: 'Austria', href: '/maps/austria' },
          { title: 'Azerbaijan', href: '/maps/azerbaijan' },
          { title: 'France', href: '/maps/france' },
          { title: 'USA', href: '/maps/usa' },
        ],
      },
      {
        title: 'US States',
        items: [
          { title: 'Alabama', href: '/maps/alabama' },
          { title: 'Alaska', href: '/maps/alaska' },
          { title: 'Arizona', href: '/maps/arizona' },
          { title: 'Arkansas', href: '/maps/arkansas' },
        ],
      },
      {
        title: 'Special',
        items: [],
      },
    ],
  },
  {
    title: 'Examples',
    items: [
      { title: 'Region Click', href: '/examples/region-click' },
      { title: 'Choropleth', href: '/examples/choropleth' },
      { title: 'Markers', href: '/examples/markers' },
      { title: 'Zoom & Pan', href: '/examples/zoom-pan' },
    ],
  },
]
