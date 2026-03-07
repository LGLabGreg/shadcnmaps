import { Hero } from '@/components/hero'
import MainNav from '@/components/main-nav'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Card,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Brush, Globe, Layers, Zap } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Zap,
    title: 'Zero Dependencies',
    description:
      'Pure React SVG — no d3, no Raphael, no jQuery. Lightweight and tree-shakeable.',
    href: '/overview/getting-started',
  },
  {
    icon: Layers,
    title: 'Drop-in Ready',
    description:
      'One component per map with tooltips, selection, markers, and labels built in.',
    href: '/overview/api-reference',
  },
  {
    icon: Globe,
    title: (
      <div className='flex items-start gap-2'>
        Growing Map Library<Badge>new</Badge>
      </div>
    ),
    description:
      'More countries and continents coming soon. Install only the maps you need via the shadcn CLI.',
    href: '/maps/usa',
  },
  {
    icon: Brush,
    title: 'Themeable',
    description:
      'CSS variables for every map color. Light and dark mode work automatically with Tailwind.',
    href: '/overview/theming',
  },
]

export default function Home() {
  return (
    <div className='flex flex-col pb-10'>
      <MainNav />
      <Hero />
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {features.map((feature) => (
            <Card key={feature.href} className='flex flex-col'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <feature.icon className='size-6' />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='flex-1'>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
              <CardFooter className='bg-background'>
                <Button
                  size='sm'
                  variant='outline'
                  className='ml-auto'
                  render={
                    <Link href={feature.href}>
                      Learn more <ArrowRight className='size-4' />
                    </Link>
                  }
                  nativeButton={false}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
