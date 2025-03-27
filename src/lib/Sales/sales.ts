import supabase from '../database'
import { v4 as uuidv4 } from 'uuid'

export async function createSale(userId: string) {
  try {
    console.log({ userId })
    const { error } = await supabase.from('sales').insert([
      {
        id: uuidv4(),
        user_id: userId,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ])
    if (error) {
      throw error
    }
    const { data: sale, error: fetchError } = await supabase
      .from('sales')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(1)
    if (fetchError) {
      throw fetchError
    }

    return sale[0]
  } catch (error) {
    console.log({ error })
    throw new Error('Erro ao criar uma nova venda.')
  }
}

export async function getSalesByDateAndUser(date: string, userId: string) {
  try {
    const { data: sales, error } = await supabase
      .from('sales')
      .select('*')
      .eq('user_id', userId)
      .gte('created_at', `${date} 00:00:00`)
      .lte('created_at', `${date} 23:59:59`)
      .limit(1)

    if (error) {
      throw error
    }

    return sales
  } catch (error) {
    console.log({ error })
    throw new Error('Erro ao buscar vendas por data e usuário.')
  }
}
