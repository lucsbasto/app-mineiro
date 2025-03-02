import type { Product } from '@/app/Products/ProductTable'
import { create } from 'zustand'
import { data as products } from '@/app/Products/ProductData'

interface ProductState {
  allProducts: Product[]
  setAllProducts: (allProducts: Product[]) => void
  loadProducts: () => Promise<void>
  isLoading: boolean
  addProduct: (product: Product) => Promise<{ success: boolean }>
  deleteProduct: (productId: string) => Promise<{ success: boolean }>
  openDeleteDialog: boolean
  setOpenDeleteDialog: (openDialog: boolean) => void
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
  openProductDialog: boolean
  setOpenProductDialog: (openProductDialog: boolean) => void
  updateProduct: (product: Product) => Promise<{ success: boolean }>
}

export const useProductStore = create<ProductState>(set => {
  return {
    allProducts: [],
    isLoading: false,
    selectedProduct: null,
    openDialog: false,
    setAllProducts: allProducts => {
      set({ allProducts: allProducts })
    },
    loadProducts: async () => {
      const fetchedProducts = await fetchProducts()
      set({ allProducts: fetchedProducts })
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
        await new Promise(resolve => setTimeout(resolve, 1789))
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
    openDeleteDialog: false,
    openProductDialog: false,
    setOpenProductDialog: (openProductDialog: boolean) => {
      set({ openProductDialog: openProductDialog })
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
        set({ openProductDialog: false })
        set({ selectedProduct: null })
      }
    },
  }
})

function fetchProducts(): Promise<Product[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 1200)
  })
}
