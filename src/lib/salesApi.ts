import { apiClient } from './apiClient'

export const getSales = async () => {
  return apiClient('/sales-products')
}

export const getSalesByDate = async (date: string) => {
  return apiClient(`/sales-products/by-date/${date}`)
}
