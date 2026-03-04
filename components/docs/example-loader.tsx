import { promises as fs } from 'node:fs'
import path from 'node:path'

import type { ReactNode } from 'react'

import { CodeBlock } from './code-block'
import { Example } from './example'

interface ExampleLoaderProps {
  filePath: string
  children: ReactNode
}

export async function ExampleLoader({
  filePath,
  children,
}: ExampleLoaderProps) {
  const absolutePath = path.resolve(process.cwd(), filePath)
  const source = await fs.readFile(absolutePath, 'utf-8')

  return <Example codeBlock={<CodeBlock code={source} />}>{children}</Example>
}
