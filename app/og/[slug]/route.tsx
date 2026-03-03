import { ImageResponse } from 'next/og'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        padding: '80px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
          color: '#71717a',
          fontSize: '20px',
        }}
      >
        shadcnmaps
      </div>
      <div
        style={{
          fontSize: '64px',
          fontWeight: 700,
          color: '#09090b',
          lineHeight: 1.1,
          maxWidth: '900px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          marginTop: '24px',
          fontSize: '24px',
          color: '#71717a',
        }}
      >
        Interactive SVG map components for React
      </div>
    </div>,
    { width: 1200, height: 630 }
  )
}
