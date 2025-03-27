import supabase from '../database'

export async function getAllProducts() {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')

    if (error) {
      throw error
    }

    return products
  } catch (error) {
    console.log({ error })
    throw new Error('Erro ao obter todos os produtos.')
  }
}
