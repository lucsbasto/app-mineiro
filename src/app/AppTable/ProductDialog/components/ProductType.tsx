import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { MdError } from 'react-icons/md'
interface ProductTypeProps {
  name: string
}

export default function ProductType({ name }: ProductTypeProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <div className="mt-5 flex flex-col gap-2">
      <Label className="whitespace-nowrap">{'Nome do Produto'}</Label>
      <div className="flex gap-2 items-center">
        <Input
          id={name}
          {...register(name)}
          type="text"
          className="h-11 shadow-none"
          placeholder="Costela"
        />
      </div>
      {errors.productName && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <MdError />
          <p>O tipo do produto é obrigatório</p>
        </div>
      )}
    </div>
  )
}
