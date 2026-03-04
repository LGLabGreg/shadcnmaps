import { AppSidebar } from '@/components/docs/app-sidebar'
import { DocHeader } from '@/components/docs/header'
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
          <main className='flex-1 overflow-auto'>{children}</main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
