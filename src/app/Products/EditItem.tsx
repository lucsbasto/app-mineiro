import type { Product } from '@/lib/types'
import { useProductStore } from '@/store/ProductStore'
import type { Row } from '@tanstack/react-table'
import { FaRegEdit } from 'react-icons/fa'

export function EditItem({ row }: { row: Row<Product> }) {
  const { setOpenUpdateProductDialog, setSelectedProduct } = useProductStore()

  function handleEditItem(item: Product) {
    setOpenUpdateProductDialog(true)
    setSelectedProduct(item)
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div
      className={`flex items-center gap-`}
      onClick={() => handleEditItem(row.original)}
    >
      <FaRegEdit className="text-lg" />{' '}
    </div>
  )
}
