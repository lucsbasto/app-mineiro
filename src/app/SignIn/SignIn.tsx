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

export function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <Card className="w-2/3 max-w-md">
        <CardHeader>
          <CardTitle>Entre com sua conta</CardTitle>
          <CardDescription>Utilize seu email e senha</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" placeholder="usuario@gmail.com" type="email" />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" placeholder="sua senha" type="password" />
          </div>
          <div>
            <Button className="mt-6 w-full">Entrar</Button>
            <div className="mt-6 flex items-center justify-center gap-6 text-lg font-semibold text-slate-500">
              <Separator />
              ou
              <Separator />
            </div>

            <Button className="mt-6 w-full bg-background text-primary hover:text-white">
              Registre-se
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
