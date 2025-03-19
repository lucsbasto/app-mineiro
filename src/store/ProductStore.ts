import { getSalesProductsByDate } from '@/lib/SalesProducts/sales-product'
import type { Product } from '@/lib/types'
import { create } from 'zustand'

interface ProductState {
  allProducts: Product[]
  isLoading: boolean
  selectedProduct: Product | null
  openDialog: boolean
  openDeleteDialog: boolean
  openCreateProductDialog: boolean
  openUpdateProductDialog: boolean
  setAllProducts: (allProducts: Product[]) => void
  loadProducts: () => Promise<void>
  addProduct: (product: Product) => Promise<{ success: boolean }>
  deleteProduct: (productId: string) => Promise<{ success: boolean }>
  setSelectedProduct: (product: Product | null) => void
  setOpenDeleteDialog: (openDeleteDialog: boolean) => void
  setOpenUpdateProductDialog: (openProductDialog: boolean) => void
  setOpenCreateProductDialog: (openProductDialog: boolean) => void
  onCloseProductDialog: () => void
  updateProduct: (updatedProduct: Product) => Promise<{ success: boolean }>
  nextProduct: () => void
}

export const useProductStore = create<ProductState>(set => {
  return {
    allProducts: [],
    isLoading: false,
    selectedProduct: null,
    openDialog: false,
    openDeleteDialog: false,
    openCreateProductDialog: false,
    openUpdateProductDialog: false,
    setAllProducts: (allProducts: Product[]) => {
      set({ allProducts: allProducts })
    },
    loadProducts: async () => {
      const fetchedProducts = await fetchProducts()
      console.log({ fetchedProducts })
      set({ allProducts: fetchedProducts })
      set({ selectedProduct: fetchedProducts?.at(0) })
    },
    addProduct: async (product: Product) => {
      set({ isLoading: true })
      try {
        await new Promise(resolve => setTimeout(resolve, 789))
        set(state => ({ allProducts: [...state.allProducts, product] }))
        return { success: true }
      } finally {
        set({ isLoading: false })
      }
    },
    setSelectedProduct: (product: Product | null) => {
      set({ selectedProduct: product })
    },
    setOpenDeleteDialog: (openDeleteDialog: boolean) => {
      set({ openDeleteDialog: openDeleteDialog })
    },
    deleteProduct: async (productId: string) => {
      set({ isLoading: true })
      try {
        set(state => ({
          allProducts: state.allProducts.filter(
            product => product.id !== productId
          ),
        }))
        return { success: true }
      } finally {
        set({ isLoading: false })
        set({ openDeleteDialog: false })
        set({ selectedProduct: null })
      }
    },
    setOpenCreateProductDialog: (open: boolean) => {
      set({ openCreateProductDialog: open })
    },
    setOpenUpdateProductDialog: (open: boolean) => {
      set({ openUpdateProductDialog: open })
    },
    updateProduct: async (updatedProduct: Product) => {
      set({ isLoading: true })
      try {
        await new Promise(resolve => setTimeout(resolve, 1789))
        set(state => ({
          allProducts: state.allProducts.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
          ),
        }))
        return { success: true }
      } finally {
        set({ isLoading: false })
      }
    },
    onCloseProductDialog: () => {
      set(state => {
        const allProducts = state.allProducts.filter(products => !!products.id)
        return {
          selectedProduct: allProducts.at(0),
          openProductDialog: false,
        }
      })
    },
    nextProduct: () => {
      set(state => {
        const allProducts = state.allProducts.filter(products => !!products.id)
        const currentIndex = allProducts.findIndex(
          product => product.id === state.selectedProduct?.id
        )
        const nextIndex = currentIndex + 1
        console.log({ nextIndex, stopIndex: allProducts.length - 1 })
        if (nextIndex <= allProducts.length - 1) {
          const nextProduct = allProducts.at(currentIndex + 1) || null
          return {
            selectedProduct: nextProduct,
            openProductDialog: true,
          }
        }
        return {
          selectedProduct: allProducts.at(0),
          openProductDialog: false,
        }
      })
    },
  }
})

async function fetchProducts(): Promise<Product[]> {
  const date = '2025-03-13T12:07:02.234504+00:00'
  const formattedDate = date.split('T')[0]

  const response = await getSalesProductsByDate(formattedDate)
  return response.map(item => formatProducts(item))
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function formatProducts(product: any): Product {
  return {
    id: product.id, // Se o id estiver presente, ele será atribuído
    type: product.products?.type, // Acessa o tipo de produto da estrutura interna `products`
    price: product.price,
    quantity: product.quantity,
    sold: product.sold || 0, // Define 0 como padrão caso `sold` seja indefinido
    returned: product.returned || 0, // Define 0 como padrão caso `returned` seja indefinido
    unitCost: product.unit_cost, // Usa o campo `unit_cost` da resposta
    revenue: product.revenue || 0, // Define 0 como padrão caso `revenue` seja indefinido
    totalCost: product.total_cost, // Usa o campo `total_cost` da resposta
    profit: product.profit, // Usa o campo `profit` da resposta
    createdAt: product.created_at ? new Date(product.created_at) : undefined, // Converte para Date se o campo existir
  }
}
