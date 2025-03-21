import supabase from '../database'

export async function getProductsId() {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select(`id`)

    if (error) {
      throw error
    }

    return products
  } catch (error) {
    console.log({ error })
    throw new Error('Erro ao obter os produtos com dados relacionados.')
  }
}
