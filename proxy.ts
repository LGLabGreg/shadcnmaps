import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

const UMAMI_URL = 'https://cloud.umami.is/api/send'

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  if (process.env.VERCEL_ENV !== 'production' || !websiteId) {
    return NextResponse.next()
  }

  // Umami uses the `isbot` package and silently drops bot user agents.
  // Send a generic browser UA so the event is recorded, and pass the
  // real user agent as custom event data instead.
  const realUA = request.headers.get('user-agent') ?? ''

  event.waitUntil(
    fetch(UMAMI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
      body: JSON.stringify({
        type: 'event',
        payload: {
          website: websiteId,
          url: request.nextUrl.pathname,
          hostname: request.nextUrl.hostname,
          referrer: request.headers.get('referer') ?? '',
          language: request.headers.get('accept-language')?.split(',')[0] ?? '',
          title: `LLM Doc: ${request.nextUrl.pathname}`,
          name: 'llm-doc-view',
          data: { userAgent: realUA, page: request.nextUrl.pathname },
        },
      }),
    }).catch(() => {}) // silent — never block doc serving
  )

  return NextResponse.next()
}

export const config = {
  matcher: ['/llms.txt', '/llms-full.txt', '/llms/:path*', '/maps/:path*.md'],
}
