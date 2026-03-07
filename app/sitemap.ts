import fs from 'fs'
import path from 'path'

import { siteConfig } from '@/lib/config'
import type { MetadataRoute } from 'next'

function getDocPages(): { slug: string; lastModified: Date }[] {
  const docsDir = path.join(process.cwd(), 'app', '(docs)')
  const pages: { slug: string; lastModified: Date }[] = []

  function scan(dir: string, base = '') {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        scan(full, path.join(base, entry.name))
      } else if (entry.name === 'page.mdx' || entry.name === 'page.tsx') {
        pages.push({ slug: base, lastModified: fs.statSync(full).mtime })
      }
    }
  }

  scan(docsDir)
  return pages
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig
  const pages = getDocPages()

  return [
    { url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    ...pages.map((page) => ({
      url: `${url}/${page.slug}`,
      lastModified: page.lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
