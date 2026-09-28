import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: { unoptimized: true },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']],
  },
})

export default withMDX(nextConfig)
