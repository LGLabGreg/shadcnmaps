import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

const UMAMI_URL = 'https://cloud.umami.is/api/send'

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
  if (process.env.VERCEL_ENV !== 'production' || !websiteId) {
    return NextResponse.next()
  }

  event.waitUntil(
    fetch(UMAMI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': request.headers.get('user-agent') ?? '',
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
        },
      }),
    }).catch(() => {}) // silent — never block doc serving
  )

  return NextResponse.next()
}

export const config = {
  matcher: ['/llms.txt', '/llms-full.txt', '/llms/:path*', '/maps/:path*.md'],
}
