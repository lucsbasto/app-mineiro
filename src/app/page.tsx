'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Dashboard from './dashboard/page'
import Register from './register/page'
import Login from './login/page'

export default function Home() {
  const { theme } = useTheme()
  const [isClient, setIsClient] = useState(false)
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white'

  useEffect(() => {
    setIsClient(true)
  }, [])

  const path = typeof window !== 'undefined' ? window.location.pathname : '/'

  return (
    <div className={`poppins ${bgColor} border w-full min-h-screen`}>
      {/* Renderiza o componente baseado na URL */}
      {path === '/dashboard' && <Dashboard />}
      {path === '/login' && <Login />}
      {path === '/register' && <Register />}
    </div>
  )
}
