'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { useEffect, useRef } from 'react'

const UpdateProductSchema = z.object({
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
    .union([z.string(), z.number()])
    .transform(val => convertToFloat(val))
    .pipe(z.number().nonnegative('O custo deve ser um valor positivo')),
})

type ProductFormData = z.infer<typeof UpdateProductSchema>

export function UpdateProductDialog() {
  const {
    selectedProduct,
    openProductDialog,
    setOpenProductDialog,
    updateProduct,
  } = useProductStore()

  const dialogCloseRef = useRef<HTMLButtonElement | null>(null)

  const methods = useForm<ProductFormData>({
    resolver: zodResolver(UpdateProductSchema),
  })
  const { reset } = methods

  const onSubmit = async (data: ProductFormData) => {
    if (!selectedProduct) return

    const productToUpdate: Product = {
      ...selectedProduct,
      ...data,
    }

    const result = await updateProduct(productToUpdate)
    if (result.success) {
      toast('Produto atualizado com sucesso')
      dialogCloseRef.current?.click()
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (selectedProduct) {
      console.log('asadas', selectedProduct.unitCost)
      reset({
        type: selectedProduct.type,
        quantity: selectedProduct.quantity,
        unitCost: selectedProduct.unitCost,
        price: selectedProduct.price,
        sold: selectedProduct.sold,
        returned: selectedProduct.returned,
      })
    }
  }, [selectedProduct, openProductDialog])

  return (
    <Dialog open={openProductDialog} onOpenChange={setOpenProductDialog}>
      <DialogContent className="p-7 px-8 poppins">
        <DialogHeader>
          <DialogTitle className="text-[22px]">Editar Produto</DialogTitle>
          <DialogDescription>
            Atualize as informações do produto
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
              <DialogClose ref={dialogCloseRef} asChild>
                <Button className="h-11 px-11">Cancelar</Button>
              </DialogClose>
              <Button className="h-11 px-11" type="submit">
                Salvar Alterações
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
