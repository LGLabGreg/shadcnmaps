import NextLink from 'next/link'
import type { ComponentProps } from 'react'

// Prefetch is off: Next 16 prefetches each link as several segment requests,
// and viewport prefetch on the 170+ map links multiplies Vercel CDN requests.
// A click still navigates client-side, fetching the page in one request.
export function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />
}
