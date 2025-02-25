import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'

interface QuantityProps {
  name: string
}

export default function Quantity({ name }: QuantityProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2 mt-5">
      <Label>Quantidade</Label>
      <Input
        id={name}
        type="number"
        placeholder="Quantidade"
        {...register(name, { valueAsNumber: true })} // Garante que o valor será tratado como número
      />
      {errors[name] && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <p>{errors[name]?.message as string}</p>
        </div>
      )}
    </div>
  )
}
