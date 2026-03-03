import { AppSidebar } from '@/components/docs/app-sidebar'
import { DocHeader } from '@/components/docs/header'
import { TableOfContents } from '@/components/docs/toc'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DocHeader />
        <div className='flex flex-1'>
          <main className='flex-1 overflow-auto xl:pr-64'>{children}</main>
          <aside className='fixed top-14 right-0 bottom-0 hidden w-64 border-l bg-background px-4 py-6 xl:block'>
            <TableOfContents />
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
