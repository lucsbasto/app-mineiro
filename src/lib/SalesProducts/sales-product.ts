import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../database'

export async function getAll(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { data: salesProducts, error } = await supabase
      .from('sales_products')
      .select('*')

    if (error) {
      throw error
    }

    res.status(200).json(salesProducts)
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}

export async function getSalesProductsByDate(date: string) {
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
