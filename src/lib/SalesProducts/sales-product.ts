import supabase from '../database'
import { getAllProducts } from '../Products/products'
import { getUserFromToken } from '../Users/authenticate'
import { v4 as uuidv4 } from 'uuid'

export async function getSalesProductsBySaleId(saleId: string) {
  try {
    const { data: salesProducts, error } = await supabase
      .from('sales_products')
      .select(`
          id,
          price,
          quantity,
          sold,
          returned,
          unit_cost,
          revenue,
          total_cost,
          profit,
          products(type)
        `)
      .eq('sale_id', saleId)

    if (error) {
      throw error
    }

    return salesProducts
  } catch (error) {
    console.log({ error })
    throw new Error(
      'Erro ao obter os produtos de venda com dados relacionados.'
    )
  }
}

export async function getSalesProductsByDate(date: string, userId: string) {
  try {
    const { data: salesProducts, error } = await supabase
      .from('sales_products')
      .select(`
          id,
          price,
          quantity,
          sold,
          returned,
          unit_cost,
          revenue,
          total_cost,
          profit,
          products(type)
        `)
      .eq('user_id', userId)
      .filter('created_at', 'gte', `${date} 00:00:00`)
      .filter('created_at', 'lte', `${date} 23:59:59`)

    if (error) {
      throw error
    }

    return salesProducts
  } catch (error) {
    console.log({ error })
    throw new Error(
      'Erro ao obter os produtos de venda com dados relacionados.'
    )
  }
}

export async function createSalesProduct(
  saleId: string,
  productId: string,
  quantity: number,
  price: number,
  unitCost: number
) {
  try {
    const { error } = await supabase.from('sales_products').insert([
      {
        id: uuidv4(),
        sale_id: saleId,
        product_id: productId,
        quantity,
        sold: 0,
        returned: 0,
        unit_cost: unitCost,
        price,
        total_cost: quantity * unitCost,
        revenue: 0,
        profit: 0,
      },
    ])

    if (error) {
      throw error
    }
    const salesProduct = await getSalesProductsBySaleId(saleId)
    return salesProduct
  } catch (error) {
    console.log('ta aqui')
    console.log({ error })
    throw new Error('Erro ao criar um novo produto de venda.')
  }
}

export async function createSalesProductMain(
  saleId: string,
  isVilaAugustaOrACM: boolean
) {
  try {
    const products = await getAllProducts()
    console.log({ products })
    for (const product of products) {
      if (isVilaAugustaOrACM) {
        await createSalesProductPriceChanged(product, saleId)
        continue
      }
      await createSalesProduct(
        saleId,
        product.id,
        0,
        product.unit_price,
        product.unit_cost
      )
    }
    const salesProduct = await getSalesProductsBySaleId(saleId)
    return salesProduct || []
  } catch (error) {
    console.error(error)
  }
}

export async function getUser() {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    try {
      const user = await getUserFromToken(accessToken)
      return user
    } catch (error) {
      console.error(error)
    }
  }
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
async function createSalesProductPriceChanged(product: any, saleId: string) {
  const excludeIds = [
    '093846f8-8b7d-4485-8356-80109d6419f4',
    '5dfe5dde-0f8b-4ab5-9053-d306c07db22c',
    '947e2515-7ab0-478e-9070-6cf553862dc1',
    'd70c3e5a-a867-45a3-8ed0-b8448594496b',
    'e8276a90-020e-4d40-b405-a98bfaf4cf67',
  ]
  if (!excludeIds.includes(product.id)) {
    await createSalesProduct(saleId, product.id, 0, 9, product.unit_cost)
  }
}
