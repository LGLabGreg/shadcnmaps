const REGISTRY_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://shadcnmaps.com'
    : 'http://localhost:3000'

export function registryUrl(componentName: string): string {
  return `${REGISTRY_BASE_URL}/r/${componentName}.json`
}
