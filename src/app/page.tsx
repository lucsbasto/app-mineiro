'use client'
import { Card } from '@/components/ui/card'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { DeleteDialog } from './Products/DeleteDialog'
import AppHeader from './AppHeader/AppHeader'
import AppTable from './AppTable/AppTable'

export default function Home() {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={`poppins ${bgColor} border w-full min-h-screen`}>
      <Card className="flex flex-col shadow-none p-2">
        <DeleteDialog />
        <AppHeader />
        <AppTable />
      </Card>
    </div>
  )
}
