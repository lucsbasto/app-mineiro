import apiClient from './apiClient'

export const getSales = async () => {
  return apiClient('/sales-products')
}

export const getSalesByDate = async (date: string) => {
  return apiClient(`/sales-products/by-date/${date}`)
}

interface UpdateSalesProductData {
  sold?: number
  returned?: number
}

export const updateSalesProduct = async (
  id: string,
  data: UpdateSalesProductData
) => {
  try {
    const response = await apiClient.patch(`/sales-products/${id}`, data)
    return response.data
  } catch (error) {
    console.error('Erro ao atualizar produto:', error)
    throw error
  }
}
