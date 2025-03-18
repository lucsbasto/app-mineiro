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

export function SignUp() {
  return (
    <main className="poppins flex justify-center items-center h-screen w-full">
      <div className="flex bg-background items-center justify-center h-full max-w-3xl w-full p-4">
        <Card className="text-2xl w-2/3 tracking-tighter">
          <CardHeader>
            <CardTitle>Cadastre-se</CardTitle>
            <CardDescription>
              Digite um email e uma senha para criar o usuário
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="usuario@gmail.com" type="email" />
            </div>
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Ponto 1" type="text" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="Sua senha" type="password" />
            </div>
            <div className="mt-4">
              <Label htmlFor="password">Confirmação de Senha</Label>
              <Input
                id="password"
                placeholder="Confirme sua senha"
                type="password"
              />
            </div>
            <div>
              <Button className="mt-6 w-full">Cadastrar</Button>
              <div className="mt-6 flex items-center justify-center gap-6 text-lg font-semibold text-slate-500">
                <Separator />
                ou
                <Separator />
              </div>

              <Button className="mt-6 w-full bg-background text-primary hover:text-white">
                Já tem conta ?
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
