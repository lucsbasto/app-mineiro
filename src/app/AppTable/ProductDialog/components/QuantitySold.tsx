import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
interface QuantitySoldProps {
  name: string
}
export default function QuantitySold({ name }: QuantitySoldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2 mt-5">
      <Label>{'Vendido'}</Label>
      <Input
        id={name}
        type="number"
        placeholder="Vendido"
        {...register(name, { valueAsNumber: true })}
      />
    </div>
  )
}
