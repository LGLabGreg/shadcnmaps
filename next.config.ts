import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/maps/:map.md',
        destination: '/llms/:map.md',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/maps/slovekia',
        destination: '/maps/slovakia',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [['remark-gfm']],
  },
})

export default withMDX(nextConfig)
