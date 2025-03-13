import { apiClient } from './ApiClient'

export const getSalesProducts = async () => {
  try {
    return apiClient('/sales-products')
  } catch (error) {
    console.error('Erro ao carregar produtos:', error)
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createSaleProduct = async (data: any) => {
  try {
    return apiClient('/sales-products', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  } catch (error) {
    console.error('Erro ao criar produto:', error)
  }
}

export const getSalesProductsByDate = async (date: Date) => {
  try {
    const formattedDate = date.toISOString().split('T')[0]
    return apiClient(`/sales-products/by-date/${formattedDate}`)
  } catch (error) {
    console.error(`Erro ao carregar produtos por data ${date}:`, error)
  }
}
