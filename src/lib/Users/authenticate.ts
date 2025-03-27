'use server'
import supabase from '../database'
import bcrypt from 'bcryptjs'
import jwt, { type JwtPayload } from 'jsonwebtoken'

const JWT_SECRET =
  process.env.JWT_SECRET || 'e5578c5e-ac81-4145-a371-c256a23ba4fb' // Defina sua chave secreta segura

interface CustomJwtPayload extends JwtPayload {
  id: string
  email: string
  isAdmin: boolean
}

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
    const payload: CustomJwtPayload = {
      id: user.id,
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

export async function getUserFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as CustomJwtPayload

    if (!decoded) {
      throw new Error('Token inválido ou expirado.')
    }
    const { id, email, isAdmin } = decoded
    return {
      id,
      email,
      isAdmin,
    }
  } catch (error) {
    console.error({ error })
    throw new Error('Erro ao obter usuário do token.')
  }
}
