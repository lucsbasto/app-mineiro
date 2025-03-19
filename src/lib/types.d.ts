export type SalesProduct = {
  id: string
  sale_id: string
  product_id: string
  quantity: number
  sold: number
  returned: number
  unit_cost: number
  price: number
  total_cost: number
  revenue: number
  profit: number
  created_at: string
  updated_at: string
}

export type Sale = {
  id: string
  total_revenue: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  user_id: string
}

export type Product = {
  id?: string
  type: string
  price: number
  quantity: number
  sold?: number
  returned?: number
  unitCost: number
  revenue?: number
  totalCost: number
  profit: number
  createdAt?: Date
}
