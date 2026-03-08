const features = [
  {
    title: 'Zero Dependencies',
    description: 'Pure React and SVG. No external mapping libraries needed.',
  },
  {
    title: '170+ Maps',
    description:
      'Countries, continents, US states. Install only what you need.',
  },
  {
    title: 'shadcn CLI',
    description: 'One command to install. Drops into your components folder.',
  },
  {
    title: 'Fully Themeable',
    description: 'CSS variables for every color. Light and dark mode built in.',
  },
]

export function FeatureStrip() {
  return (
    <div className='border-y'>
      <div className='-my-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature) => (
          <div
            key={feature.title}
            className='-mt-px -ml-px border bg-card px-6 py-6'
          >
            <h3 className='text-sm font-semibold'>{feature.title}</h3>
            <p className='mt-1 text-sm text-muted-foreground'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
