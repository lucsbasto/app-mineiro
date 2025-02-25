import { Input } from '@/components/ui/input'
import { convertToFloat } from '@/utils/convert-to-float.utils'
import { Label } from '@radix-ui/react-dropdown-menu'
import { useFormContext } from 'react-hook-form'
import { MdError } from 'react-icons/md'
import { NumericFormat } from 'react-number-format'

interface UnitCostProps {
  name: string
}

export default function UnitCost({ name }: UnitCostProps) {
  const {
    register,
    formState: { errors },
    setValue, // Usaremos setValue para atualizar o valor no react-hook-form
  } = useFormContext()

  return (
    <div className="flex flex-col gap-2 mt-5">
      <Label>Preço</Label>
      <NumericFormat
        id={name}
        customInput={Input}
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
        fixedDecimalScale
        allowNegative={false}
        placeholder="Preço"
        {...register(name, {
          required: 'O custo unitário é obrigatório',
        })}
        onValueChange={values => {
          const { value } = values
          const numericValue = convertToFloat(value)
          setValue(name, numericValue)
        }}
      />
      {errors[name] && (
        <div className="text-red-500 flex gap-1 items-center text-[13px]">
          <MdError />
          <p>O preço do produto é obrigatório</p>
        </div>
      )}
    </div>
  )
}
