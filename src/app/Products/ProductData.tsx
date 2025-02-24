'use client'

import { Product } from "./ProductTable";

export const data: Product[] = [
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d0',
    type: "Coração",
    price: 5.00,
    quantity: 50,
    sold: 40,
    returned: 10,
    cost: 2.50,
    revenue: 200.00,
    totalCost: 125.00,
    profit: 75.00
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d1',
    type: "Músculo",
    price: 6.00,
    quantity: 30,
    sold: 25,
    returned: 5,
    cost: 3.00,
    revenue: 150.00,
    totalCost: 90.00,
    profit: 60.00
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d2',
    type: "Frango",
    price: 4.50,
    quantity: 40,
    sold: 35,
    returned: 5,
    cost: 2.00,
    revenue: 157.50,
    totalCost: 80.00,
    profit: 77.50
  },
  {
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d3',
    type: "Frango com Bacon",
    price: 7.00,
    quantity: 20,
    sold: 18,
    returned: 2,
    cost: 3.50,
    revenue: 126.00,
    totalCost: 70.00,
    profit: 56.00
  },
	{
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d4',
    type: "Batata com Bacon",
    price: 7.00,
    quantity: 20,
    sold: 18,
    returned: 2,
    cost: 3.50,
    revenue: 126.00,
    totalCost: 70.00,
    profit: -56.00
  },
	{
    id: '010e62cc-06b2-4095-8c06-0dc1629be4d5',
    type: "Total",
    price: 29.50,
    quantity: 180,
    sold: 136,
    returned: 24,
    cost: 14.50,
    revenue: 759.50,
    totalCost: 435.00,
    profit: 268.50
  },
];