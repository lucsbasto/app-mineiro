import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ProductType from './components/ProductType'
import Quantity from './components/Quantity'
import QuantityReturned from './components/QuantityReturned'
import QuantitySold from './components/QuantitySold'
import UnitCost from './components/UnitCost'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { z } from 'zod'
import type { Product } from '@/app/Products/ProductTable'
import Price from './components/Price'
import { convertToFloat } from '@/utils/convert-to-float.utils'
import { useProductStore } from '@/store/ProductStore'
import { useRef } from 'react'

const ProductSchema = z.object({
  type: z.string().min(1, 'O tipo do produto é obrigatório'),
  price: z
    .union([z.string(), z.number()])
    .transform(val => convertToFloat(val))
    .pipe(z.number().nonnegative('O preço deve ser um valor positivo')),

  quantity: z.preprocess(
    val => Number(val),
    z
      .number()
      .int()
      .nonnegative('A quantidade deve ser um número inteiro positivo')
  ),
  sold: z.preprocess(
    val => Number(val),
    z
      .number()
      .int()
      .nonnegative('O número de vendidos deve ser um número inteiro positivo')
  ),
  returned: z.preprocess(
    val => Number(val),
    z
      .number()
      .int()
      .nonnegative('O número de devolvidos deve ser um número inteiro positivo')
  ),
  unitCost: z
    .union([z.string(), z.number()]) // Aceita string ou número
    .transform(val => convertToFloat(val)) // Converte para número corretamente
    .pipe(z.number().nonnegative('O custo deve ser um valor positivo')),
})

type ProductFormData = z.infer<typeof ProductSchema>

export function ProductDialog() {
  const { addProduct, isLoading } = useProductStore()

  const dialogCloseRef = useRef<HTMLButtonElement | null>(null)

  const methods = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      type: '',
      unitCost: 0.0,
      price: 0.0,
      quantity: 0,
      returned: 0,
      sold: 0,
    },
  })
  const { reset } = methods
  const { errors } = methods.formState
  const onSubmit = async (data: ProductFormData) => {
    const revenue = 0
    const totalCost = 0
    const profit = 0
    const product: Product = {
      id: 'teste',
      unitCost: data.unitCost,
      type: data.type,
      price: data.price,
      quantity: data.quantity,
      sold: data.sold,
      returned: data.returned,
      revenue: revenue,
      totalCost: totalCost,
      profit: profit,
      createdAt: new Date(),
    }
    const result = await addProduct(product)
    if (result) {
      toast('Produto adicionado com sucesso')
      dialogCloseRef.current?.click()
      handleReset()
    }
  }

  function handleReset() {
    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Adicionar Produto</Button>
      </DialogTrigger>
      <DialogContent className="p-7 px-8 poppins">
        <DialogHeader>
          <DialogTitle className="text-[22px]">Adicionar Produto</DialogTitle>
          <DialogDescription>
            Preencha o formulário com os dados do produto
          </DialogDescription>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mt-1">
              <div className="grid grid-cols-3 gap-7">
                <ProductType name="type" />
                <Quantity name="quantity" />
                <UnitCost name="unitCost" />
              </div>
              <div className="grid grid-cols-3 gap-5 items-center">
                <Price name="price" />
                <QuantitySold name="sold" />
                <QuantityReturned name="returned" />
              </div>
            </div>
            <DialogFooter className="pt-10">
              <DialogClose ref={dialogCloseRef} onClick={handleReset} asChild>
                <Button className="h-11 px-11">Cancelar</Button>
              </DialogClose>
              <Button className="h-11 px-11" type="submit">
                Adicionar Produto
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
