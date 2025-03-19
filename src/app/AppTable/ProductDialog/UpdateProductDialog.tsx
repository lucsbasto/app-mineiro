import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ProductType from './components/ProductType'
import QuantityReturned from './components/QuantityReturned'
import QuantitySold from './components/QuantitySold'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { z } from 'zod'
import { convertToFloat } from '@/utils/convert-to-float.utils'
import { useProductStore } from '@/store/ProductStore'
import { useEffect } from 'react'
import type { Product } from '@/lib/types'

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
export function UpdateSaleDialog() {
  const {
    selectedProduct,
    openUpdateProductDialog,
    setOpenUpdateProductDialog,
    updateProduct,
    nextProduct,
    onCloseProductDialog,
  } = useProductStore()

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
      await nextProduct()
      // Não é necessário chamar resetForm aqui, pois o useEffect cuida disso
    }
  }
  const closeUpdateProductDialog = (open: boolean) => {
    setOpenUpdateProductDialog(open)
    if (!open) {
      reset({
        type: selectedProduct?.type,
        sold: selectedProduct?.sold,
        returned: selectedProduct?.returned,
      })
      onCloseProductDialog()
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (selectedProduct) {
      reset({
        type: selectedProduct.type,
        quantity: selectedProduct.quantity,
        unitCost: selectedProduct.unitCost,
        price: selectedProduct.price,
        sold: selectedProduct.sold,
        returned: selectedProduct.returned,
      })
    } else {
      reset() // Resetar o formulário quando não há produto selecionado
    }
  }, [selectedProduct, reset])

  return (
    <Dialog
      open={openUpdateProductDialog}
      onOpenChange={closeUpdateProductDialog}
    >
      <DialogTrigger asChild>
        <Button>Editar Venda</Button>
      </DialogTrigger>
      <DialogContent className="p-7 px-8 poppins max-w-3xl w-full h-auto">
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
                <ProductType name="type" readonly={true} />
                <QuantitySold name="sold" />
                <QuantityReturned name="returned" />
              </div>
            </div>
            <DialogFooter className="pt-10">
              <Button className="h-11 px-11" type="submit">
                Confirmar e Próximo
              </Button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
