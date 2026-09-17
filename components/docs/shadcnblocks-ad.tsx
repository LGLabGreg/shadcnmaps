import { ShadcnBlocksIcon } from '@/components/icons/shadcnblocks'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from 'lucide-react'

export const SHADCNBLOCKS_AFFILIATE_URL =
  'https://www.shadcnblocks.com/?via=lglab'

/**
 * Decorative "page built from blocks" illustration: a tiny wireframe that
 * assembles itself on hover. Purely visual, hidden from assistive tech.
 */
function BlocksIllustration() {
  const block =
    'rounded-[3px] bg-foreground/[0.09] transition-all duration-500 ease-out group-hover/ad:bg-foreground/[0.16]'

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute top-2 -right-4 w-24 rotate-[-8deg] [mask-image:linear-gradient(200deg,black_35%,transparent_75%)] transition-transform duration-500 ease-out group-hover/ad:-translate-x-1 group-hover/ad:rotate-[-5deg]'
    >
      <div className='grid gap-1'>
        <div className={cn(block, 'h-2 w-2/3')} />
        <div className='grid grid-cols-3 gap-1'>
          <div
            className={cn(
              block,
              'h-7 delay-75 group-hover/ad:-translate-y-0.5'
            )}
          />
          <div
            className={cn(block, 'h-7 delay-100 group-hover/ad:-translate-y-1')}
          />
          <div
            className={cn(
              block,
              'h-7 delay-150 group-hover/ad:-translate-y-0.5'
            )}
          />
        </div>
        <div className='grid grid-cols-[2fr_1fr] gap-1'>
          <div className={cn(block, 'h-4')} />
          <div className={cn(block, 'h-4')} />
        </div>
      </div>
    </div>
  )
}

export function ShadcnBlocksAd({ className }: { className?: string }) {
  return (
    <a
      href={SHADCNBLOCKS_AFFILIATE_URL}
      target='_blank'
      rel='noopener sponsored'
      aria-label='shadcnblocks: hundreds of premium blocks and templates built with shadcn/ui (ad)'
      data-umami-event='Shadcnblocks affiliate'
      data-umami-event-placement='sidebar'
      className={cn(
        'group/ad relative isolate flex flex-col gap-3 overflow-hidden rounded-xl bg-card p-3 text-card-foreground ring-1 ring-foreground/10 transition-all duration-300 ease-out outline-none',
        'hover:shadow-md hover:shadow-foreground/5 hover:ring-foreground/20 focus-visible:ring-2 focus-visible:ring-ring',
        // subtle dot grid so the card reads as a "canvas"
        'bg-[radial-gradient(color-mix(in_oklch,var(--foreground)_7%,transparent)_1px,transparent_1px)] bg-[size:14px_14px]',
        className
      )}
    >
      <BlocksIllustration />

      <div className='relative flex items-start'>
        <div className='flex size-9 items-center justify-center rounded-lg bg-foreground text-background shadow-sm transition-transform duration-300 ease-out group-hover/ad:scale-105 group-hover/ad:-rotate-3'>
          <ShadcnBlocksIcon className='h-5 w-auto' />
        </div>
      </div>

      <div className='relative flex flex-col gap-1'>
        <p className='text-sm leading-tight font-semibold'>
          Ship pages faster with shadcnblocks
        </p>
        <p className='text-xs leading-relaxed text-muted-foreground'>
          Hundreds of premium blocks &amp; templates built with shadcn/ui.
        </p>
      </div>

      <div className='relative flex items-center justify-between'>
        <span className='flex items-center gap-1 text-xs font-medium'>
          <span className='underline-offset-4 group-hover/ad:underline'>
            Explore blocks
          </span>
          <ArrowUpRightIcon className='size-3.5 transition-transform duration-300 ease-out group-hover/ad:translate-x-0.5 group-hover/ad:-translate-y-0.5' />
        </span>
        <span className='text-[10px] leading-4 font-medium tracking-wider text-muted-foreground/70 uppercase'>
          Ad
        </span>
      </div>
    </a>
  )
}
