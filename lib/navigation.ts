export interface NavItem {
  title: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: 'Overview',
    items: [
      { title: 'Getting Started', href: '/overview/getting-started' },
      { title: 'Quick Start', href: '/overview/quick-start' },
      { title: 'Theming', href: '/overview/theming' },
    ],
  },
  {
    title: 'Maps',
    items: [{ title: 'USA Map', href: '/maps/usa-map' }],
  },
]
