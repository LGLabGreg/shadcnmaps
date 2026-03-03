import { MDXCodeBlock } from '@/components/docs/mdx-code-block'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function toSlug(children: React.ReactNode): string {
  const text = typeof children === 'string' ? children : ''
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

type MDXComponents = Record<
  string,
  React.ComponentType<{ children?: React.ReactNode; [key: string]: unknown }>
>

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        id={toSlug(children)}
        className='mt-2 scroll-mt-20 text-3xl font-bold tracking-tight'
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={toSlug(children)}
        className='mt-8 scroll-mt-20 text-xl font-semibold first:mt-0'
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={toSlug(children)}
        className='mt-6 scroll-mt-20 text-base font-semibold'
      >
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className='mt-4 leading-7 first:mt-0'>{children}</p>
    ),
    a: ({ children, ...props }) => (
      <a
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        className='font-medium underline underline-offset-4 hover:opacity-80'
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className='my-4 list-disc space-y-1 pl-6'>{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className='my-4 list-decimal space-y-1 pl-6'>{children}</ol>
    ),
    li: ({ children }) => <li className='leading-7'>{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className='mt-4 border-l-2 pl-4 text-muted-foreground italic'>
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
        {children}
      </code>
    ),
    pre: ({ children }) => <MDXCodeBlock>{children}</MDXCodeBlock>,
    table: ({ children }) => <Table className='my-4'>{children}</Table>,
    thead: ({ children }) => <TableHeader>{children}</TableHeader>,
    tbody: ({ children }) => <TableBody>{children}</TableBody>,
    th: ({ children }) => <TableHead>{children}</TableHead>,
    td: ({ children }) => <TableCell>{children}</TableCell>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    ...components,
  }
}
