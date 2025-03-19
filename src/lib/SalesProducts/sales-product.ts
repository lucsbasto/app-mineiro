import type { NextApiRequest, NextApiResponse } from 'next'
import supabase from '../database'

export async function getAll(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  try {
    const { data: salesProducts, error } = await supabase
      .from('sales_products')
      .select('*') // Fazendo a consulta no banco de dados

    if (error) {
      throw error // Se houver erro na consulta, lançamos a exceção
    }

    res.status(200).json(salesProducts) // Retorna os produtos de vendas
  } catch (error) {
    res.status(500).json({ error: (error as Error).message })
  }
}

export async function getSalesProductsByDate(date: string) {
  try {
    const { data: salesProducts, error } = await supabase
      .from('sales_products') // Tabela sales_products
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
        `) // Seleciona todas as colunas de sales_products, sales e products
      .filter('created_at', 'gte', `${date} 00:00:00`) // Começo do dia
      .filter('created_at', 'lte', `${date} 23:59:59`) // Fim do dia

    if (error) {
      throw error // Se houver erro, lança a exceção
    }

    return salesProducts // Retorna os produtos de vendas com todas as informações
  } catch (error) {
    console.log({ error })
    throw new Error(
      'Erro ao obter os produtos de venda com dados relacionados.'
    )
  }
}
