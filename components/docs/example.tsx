'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Eye } from 'lucide-react'
import Link from 'next/link'
import { type ReactNode } from 'react'

interface ExampleProps {
  title?: string
  children: ReactNode
  codeBlock: ReactNode
}

export function Example({ title, children, codeBlock }: ExampleProps) {
  const slug = title?.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className='space-y-2'>
      {title && (
        <h3 id={slug} className='scroll-mt-20 text-lg font-medium'>
          <Link href={`#${slug}`}>{title}</Link>
        </h3>
      )}
      <Tabs defaultValue='preview'>
        <TabsList>
          <TabsTrigger value='preview'>
            <Eye className='size-3.5' />
            Preview
          </TabsTrigger>
          <TabsTrigger value='code'>
            <Code className='size-3.5' />
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value='preview'>
          <div className='flex justify-center rounded-lg border p-6'>
            {children}
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <div className='rounded-lg border'>
            <div className='max-h-[500px] overflow-auto'>{codeBlock}</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
