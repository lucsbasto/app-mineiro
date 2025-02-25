import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import type { Product } from './ProductTable'
import { ProductDropDown } from './ProductDropDown'

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Tipo
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('type')}</div>
    ),
  },
  {
    accessorKey: 'price',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Preço
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('price'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Quantidade
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('quantity')}</div>
    ),
  },
  {
    accessorKey: 'sold',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Vendido
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('sold')}</div>
    ),
  },
  {
    accessorKey: 'returned',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Devolvido
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-center">{row.getValue('returned')}</div>
    ),
  },
  {
    accessorKey: 'unitCost',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Custo Unitário
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('unitCost'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    accessorKey: 'revenue',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Receita
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('revenue'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    accessorKey: 'totalCost',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Custo Total
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('totalCost'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)
      return <div className="text-center">{formatted}</div>
    },
  },
  {
    accessorKey: 'profit',
    header: ({ column }) => (
      <div
        className="text-center px-2 cursor-pointer"
        onKeyDown={() => column.toggleSorting()}
      >
        Lucro
        <ArrowUpDown className="ml-2 h-4 w-4 inline-block" />
      </div>
    ),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('profit'))
      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return (
        <div
          className={`text-center font-semibold ${amount >= 0 ? 'text-green-500' : 'text-red-500'}`}
        >
          {formatted}
        </div>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    header: () => <div className="text-center px-2">Ações</div>,
    cell: ({ row }) => {
      return <ProductDropDown row={row} />
    },
  },
]
