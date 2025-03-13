import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { useProductStore } from '@/store/ProductStore'

export function DeleteDialog() {
  const {
    openDeleteDialog,
    setOpenDeleteDialog,
    setSelectedProduct,
    selectedProduct,
    isLoading,
    deleteProduct,
  } = useProductStore()

  async function deleteProductFn() {
    console.log('deletando produto', selectedProduct)
  }

  return (
    <AlertDialog
      open={openDeleteDialog}
      onOpenChange={open => {
        setOpenDeleteDialog(open)
      }}
    >
      <AlertDialogContent className="p-8">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">
            Você tem certeza absoluta?
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2">
            Esta ação não pode ser desfeita. Isso excluirá permanentemente o
            produto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8">
          <AlertDialogCancel onClick={() => setSelectedProduct(null)}>
            {isLoading ? 'Deletando...' : 'Cancelar'}
          </AlertDialogCancel>
          <AlertDialogAction onClick={deleteProductFn}>
            Confirmar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
