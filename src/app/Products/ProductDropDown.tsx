'use client'

import type { Row } from '@tanstack/react-table'
import type { Product } from './ProductTable'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineDelete } from 'react-icons/md'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

export function ProductDropDown({ row }: { row: Row<Product> }) {
  const menuItems = [
    { icon: <FaRegEdit />, label: 'Editar', className: '' },
    { separator: true },
    {
      icon: <MdOutlineDelete className="text-lg" />,
      label: 'Deletar',
      className: 'text-red-600',
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Abrir Opções</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuItems.map((item, index) =>
          item.separator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem
              key={index}
              className={`flex items-center gap-1 ${item.className}`}
            >
              {item.icon}
              <span>{item.label}</span>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
