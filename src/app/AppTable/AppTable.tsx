'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ProductTable } from '../Products/ProductTable'
import { columns } from '../Products/Columns'
import { ProductDialog } from './ProductDialog/ProductDialog'
import { useProductStore } from '@/store/ProductStore'
import { useEffect } from 'react'

export default function AppTable() {
  const { allProducts, loadProducts } = useProductStore()

  useEffect(() => {
    loadProducts()
  })

  return (
    <Card className="mt-12 flex flex-col shadow-none poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div className="">
            <CardTitle className="font-bold text-[23px]">Produtos</CardTitle>
            <p className="text-sm text-slate-600">
              {allProducts.length} produtos
            </p>
          </div>
          <ProductDialog />
        </div>
      </CardHeader>

      <CardContent className="mt-12">
        <ProductTable data={allProducts} columns={columns} />
      </CardContent>
    </Card>
  )
}
