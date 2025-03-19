import type { Product } from '@/lib/types'
import { useProductStore } from '@/store/ProductStore'
import type { Row } from '@tanstack/react-table'
import { MdOutlineDelete } from 'react-icons/md'

export function DeleteItem({ row }: { row: Row<Product> }) {
  const { setOpenDeleteDialog, setSelectedProduct } = useProductStore()

  function handleDeleteItem(item: Product) {
    setOpenDeleteDialog(true)
    setSelectedProduct(item)
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={`flex items-center gap-1 text-red-600`}
      onClick={() => handleDeleteItem(row.original)}
    >
      <MdOutlineDelete className="text-lg" />{' '}
    </div>
  )
}
