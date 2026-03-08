export const IS_PRODUCTION = process.env.VERCEL_ENV === 'production'

const REGISTRY_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://shadcnmaps.com'
    : 'http://localhost:3000'

export function registryUrl(componentName: string): string {
  return `${REGISTRY_BASE_URL}/r/${componentName}.json`
}

export const siteConfig = {
  name: 'shadcnmaps',
  url: 'https://shadcnmaps.com',
  description:
    'Interactive SVG map components for React. No dependencies, pure Tailwind.',
  keywords: [
    'React',
    'Tailwind CSS',
    'SVG maps',
    'shadcn',
    'interactive maps',
    'map component',
    'React map',
    'SVG map component',
    'interactive map component',
  ],
}
