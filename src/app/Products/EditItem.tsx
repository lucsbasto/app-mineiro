import { useProductStore } from '@/store/ProductStore'
import type { Product } from './ProductTable'
import type { Row } from '@tanstack/react-table'
import { FaRegEdit } from 'react-icons/fa'

export function EditItem({ row }: { row: Row<Product> }) {
  const { setOpenDialog, setSelectedProduct } = useProductStore()

  function handleEditItem(item: Product) {
    setOpenDialog(true)
    setSelectedProduct(row.original)
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
