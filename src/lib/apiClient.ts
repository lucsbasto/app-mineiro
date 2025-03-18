import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
})

// Interceptor de requisição corrigido
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token =
    localStorage.getItem('token') || process.env.NEXT_PUBLIC_DEFAULT_TOKEN

  return {
    ...config,
    headers: {
      ...(config.headers || {}), // Garante headers existentes
      ...(token && { Authorization: `Bearer ${token}` }), // Adiciona condicionalmente
    },
  } as InternalAxiosRequestConfig // Type assertion para compatibilidade
})

// Interceptor de resposta
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  error => {
    if (error.response) {
      throw new Error(
        `Erro ${error.response.status}: ${error.response.statusText}`
      )
    }
    throw error
  }
)

export default apiClient
