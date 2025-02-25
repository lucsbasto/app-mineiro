'use client'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ProductTable } from '../Products/ProductTable'
import { data } from '../Products/ProductData'
import { columns } from '../Products/Columns'
import { ProductDialog } from './ProductDialog/ProductDialog'

export default function AppTable() {
  return (
    <Card className="mt-12 flex flex-col shadow-none poppins border-none">
      <CardHeader className="flex justify-between p-2">
        <div className="flex justify-between items-center">
          <div className="">
            <CardTitle className="font-bold text-[23px]">Produtos</CardTitle>
            <p className="text-sm text-slate-600">34 produtos</p>
          </div>
          <ProductDialog />
        </div>
      </CardHeader>

      <CardContent className="mt-12">
        <ProductTable data={data} columns={columns} />
      </CardContent>
    </Card>
  )
}
