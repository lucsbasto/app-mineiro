'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useRouter } from 'next/navigation'
import { authenticateUser } from '@/lib/Users/authenticate'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Simulando uma requisição de login (substitua pela sua API)
      const { accessToken } = await authenticateUser(email, password)
      localStorage.setItem('accessToken', accessToken) // Armazena o token no localStorage

      router.push('/dashboard') // Redireciona após login bem-sucedido
    } catch (error) {
      console.error('Erro ao fazer login:', error)
      alert('Erro ao fazer login. Verifique suas credenciais.')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-2/3 max-w-md">
        <CardHeader>
          <CardTitle>Entre com sua conta</CardTitle>
          <CardDescription>Utilize seu email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                placeholder="usuario@gmail.com"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="sua senha"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="mt-6 w-full" type="submit">
              Entrar
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-6 text-lg font-semibold text-slate-500">
            <Separator />
            ou
            <Separator />
          </div>

          <Button
            className="mt-6 w-full bg-background text-primary hover:text-white"
            onClick={() => router.push('/register')}
          >
            Registre-se
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
