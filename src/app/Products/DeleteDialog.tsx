import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useProductStore } from '@/store/ProductStore'
import { toast } from 'sonner'

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
    console.log('aqui')
    if (selectedProduct) {
      const result = await deleteProduct(selectedProduct?.id)
      if (result) {
        toast('Produto deletado com sucesso')
      }
    }
  }

  return (
    <AlertDialog
      open={openDeleteDialog}
      onOpenChange={open => {
        setOpenDeleteDialog(open)
      }}
    >
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent className="p-8">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription className="mt-2">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-8">
          <AlertDialogCancel onClick={() => setSelectedProduct(null)}>
            {isLoading ? 'Deletando ...' : 'Produto'}
          </AlertDialogCancel>
          <AlertDialogAction onClick={deleteProductFn}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
