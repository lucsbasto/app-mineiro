'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SalePage } from './SalePage/SalePage'

export default function Home() {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={`poppins ${bgColor} border w-full min-h-screen`}>
      <SalePage />
    </div>
  )
}
