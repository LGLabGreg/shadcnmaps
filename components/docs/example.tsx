'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Eye } from 'lucide-react'
import { type ReactNode } from 'react'

interface ExampleProps {
  children: ReactNode
  codeBlock: ReactNode
}

export function Example({ children, codeBlock }: ExampleProps) {
  return (
    <Tabs defaultValue='preview' className='mt-6'>
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
        <div className='rounded-lg border p-6'>{children}</div>
      </TabsContent>
      <TabsContent value='code'>
        <div className='rounded-lg border'>
          <div className='max-h-[500px] overflow-auto'>{codeBlock}</div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
