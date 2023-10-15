import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'

export function Default() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  return (
    <Collapsible.Root onOpenChange={setIsSideBarOpen} defaultOpen className='h-screen w-screen bg-rotion-900 text-rotion-100 flex'>
        <Sidebar />
        <div className='flex-1 flex-col max-h-screen'>
          <Header isSidebarOpen={isSideBarOpen}/>

          <Outlet />
        </div>
    </Collapsible.Root>
  )
}
