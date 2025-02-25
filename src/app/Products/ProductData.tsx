'use client'

import type { Product } from './ProductTable'

export const data: Product[] = [
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d0',
    type: 'Coração',
    price: 5.0,
    quantity: 50,
    sold: 40,
    returned: 10,
    unitCost: 2.5,
    revenue: 200.0,
    totalCost: 125.0,
    profit: 75.0,
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d1',
    type: 'Músculo',
    price: 6.0,
    quantity: 30,
    sold: 25,
    returned: 5,
    unitCost: 3.0,
    revenue: 150.0,
    totalCost: 90.0,
    profit: 60.0,
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d2',
    type: 'Frango',
    price: 4.5,
    quantity: 40,
    sold: 35,
    returned: 5,
    unitCost: 2.0,
    revenue: 157.5,
    totalCost: 80.0,
    profit: 77.5,
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d3',
    type: 'Frango com Bacon',
    price: 7.0,
    quantity: 20,
    sold: 18,
    returned: 2,
    unitCost: 3.5,
    revenue: 126.0,
    totalCost: 70.0,
    profit: 56.0,
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d4',
    type: 'Batata com Bacon',
    price: 7.0,
    quantity: 20,
    sold: 18,
    returned: 2,
    unitCost: 3.5,
    revenue: 126.0,
    totalCost: 70.0,
    profit: -56.0,
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d5',
    type: 'Total',
    price: 29.5,
    quantity: 180,
    sold: 136,
    returned: 24,
    unitCost: 14.5,
    revenue: 759.5,
    totalCost: 435.0,
    profit: 268.5,
  },
]
