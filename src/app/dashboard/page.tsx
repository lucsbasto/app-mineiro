'use client'

import { Card } from '@/components/ui/card'
import { DeleteDialog } from '../Products/DeleteDialog'
import AppHeader from '../AppHeader/AppHeader'
import AppTable from '../AppTable/AppTable'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const isLoggedIn = () => {
    if (typeof window !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken')
      return accessToken !== null
    }
    return false
  }

  if (isLoggedIn()) {
    return (
      <div>
        <Card className="flex flex-col shadow-none p-2">
          <DeleteDialog />
          <AppHeader />
          <AppTable />
        </Card>
      </div>
    )
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    // Redireciona para a página de login se o usuário não estiver logado
    // Você pode usar o useRouter do Next.js para isso
    const router = useRouter()
    router.push('/login')
    return null // ou um componente de carregamento
  }
}
