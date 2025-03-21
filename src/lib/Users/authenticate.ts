'use server'
import supabase from '../database'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET =
  process.env.JWT_SECRET || 'e5578c5e-ac81-4145-a371-c256a23ba4fb' // Defina sua chave secreta segura

export async function authenticateUser(email: string, password: string) {
  try {
    console.log({ email, password })
    const { data: user, error } = await supabase
      .from('users')
      .select('id, username, password, is_admin')
      .eq('username', email)
      .single()
    console.log({ user, error })
    if (error || !user) {
      console.log({ error })
      throw new Error(error.message)
    }

    // Comparar a senha fornecida com a senha hash armazenada
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new Error('Usuário ou senha inválidos.')
    }
    const payload = {
      userId: user.id,
      email: user.username,
      isAdmin: user.is_admin,
    }
    const accessToken = jwt.sign(payload, JWT_SECRET)
    return { accessToken }
  } catch (error) {
    console.error({ error })
    throw new Error('Erro ao autenticar usuário.')
  }
}
