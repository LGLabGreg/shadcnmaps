'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import type { NavSection } from '@/lib/navigation'
import { navigation } from '@/lib/navigation'
import { ChevronRightIcon, LightbulbIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useState } from 'react'

import { Logo } from '../logo'

function FlatSection({
  section,
  pathname,
}: {
  section: NavSection
  pathname: string
}) {
  return (
    <SidebarGroup>
      {!section.hideLabel && (
        <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {section.items?.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                isActive={pathname === item.href}
                render={<Link href={item.href} />}
              >
                {item.title}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

function GroupedSection({
  section,
  pathname,
}: {
  section: NavSection
  pathname: string
}) {
  const groups = section.groups?.filter((group) => group.items.length > 0) ?? []

  const [openGroups, setOpenGroups] = useState<Set<string>>(() => {
    const initial = new Set<string>()
    for (const group of groups) {
      if (group.items.some((item) => item.href === pathname)) {
        initial.add(group.title)
      }
    }
    return initial
  })

  const toggleGroup = useCallback((title: string, open: boolean) => {
    setOpenGroups((prev) => {
      const next = new Set(prev)
      if (open) {
        next.add(title)
      } else {
        next.delete(title)
      }
      return next
    })
  }, [])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        {section.href ? (
          <Link href={section.href} className='hover:underline'>
            {section.title}
          </Link>
        ) : (
          section.title
        )}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {groups.map((group) => (
            <SidebarMenuItem key={group.title}>
              <Collapsible
                open={openGroups.has(group.title)}
                onOpenChange={(open) => toggleGroup(group.title, open)}
              >
                <CollapsibleTrigger
                  render={<SidebarMenuButton />}
                  className='group/collapsible w-full'
                >
                  <ChevronRightIcon className='size-4 transition-transform duration-200 group-data-panel-open/collapsible:rotate-90' />
                  {group.title}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {group.items.map((item) => (
                      <SidebarMenuSubItem key={item.href}>
                        <SidebarMenuSubButton
                          isActive={pathname === item.href}
                          render={<Link href={item.href} />}
                        >
                          {item.title}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar collapsible='offcanvas'>
      <SidebarHeader>
        <Link href='/' className='flex items-center gap-2 p-2 font-semibold'>
          <Logo />
          shadcnmaps
        </Link>
      </SidebarHeader>
      <SidebarContent className='flex flex-col'>
        {navigation.map((section) =>
          section.groups ? (
            <GroupedSection
              key={section.title}
              section={section}
              pathname={pathname}
            />
          ) : (
            <FlatSection
              key={section.title}
              section={section}
              pathname={pathname}
            />
          )
        )}
      </SidebarContent>
      <SidebarFooter>
        <Card size='sm'>
          <CardContent className='flex flex-col items-start gap-2'>
            <div className='flex items-center gap-2 font-medium'>
              <LightbulbIcon className='size-4' />
              Have an idea?
            </div>
            <p className='text-xs text-muted-foreground'>
              Request a feature or suggest a new map.
            </p>
            <Button
              size='sm'
              className='w-full'
              render={
                <a
                  href='https://github.com/LGLabGreg/shadcnmaps/discussions/categories/ideas'
                  target='_blank'
                  data-umami-event='Feature request'
                />
              }
              nativeButton={false}
            >
              Request a feature
            </Button>
          </CardContent>
        </Card>
      </SidebarFooter>
    </Sidebar>
  )
}
