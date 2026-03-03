'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
    setHeadings(
      elements.map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: Number(el.tagName[1]),
      }))
    )
  }, [])

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
    )

    for (const { id } of headings) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <div>
      <p className='mb-3 text-sm font-semibold text-foreground'>On this page</p>
      <nav>
        <ul className='space-y-1'>
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={cn(
                  'block rounded-md py-1 text-sm transition-colors',
                  level === 3 ? 'pl-4' : 'pl-2',
                  activeId === id
                    ? 'font-medium text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
