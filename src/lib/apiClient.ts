export const apiClient = async (endpoint: string, options?: RequestInit) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  const tokenPonto1 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE5NTY1MTgsImlhdCI6MTc0MTg3MDExOCwiaXNBZG1pbiI6ZmFsc2UsIm5hbWUiOiJQb250byAxIiwic3ViIjoiNDA4ZGQ0MTYtYjZiZi00MjJlLWEzMjAtNDg1ZmIwZjA0NmM4IiwidXNlcm5hbWUiOiJwb250by0xQG1pbmVpcm8uY29tIn0.GNOJiBoFX_tOOrTx_jtqk0Y1Wrr6mWY6hWzrazO491k'
  const tokenPonto2 =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE4MjI4MzAsImlhdCI6MTc0MTczNjQzMCwiaXNBZG1pbiI6ZmFsc2UsIm5hbWUiOiJQb250byAxIiwic3ViIjoiOGViYzM0MWEtMWJiMy00ZTZmLWEwNWEtMmRmNzU4OWQ0NTgwIiwidXNlcm5hbWUiOiJwb250by0xQG1pbmVpcm8uY29tIn0.EZ8sCntvB_lijyq4I6ARIUDTxvoXQOcUSJiwm8g8SnI'
  const tokenAdmin =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDE5NTM3MTIsImlhdCI6MTc0MTg2NzMxMiwiaXNBZG1pbiI6dHJ1ZSwibmFtZSI6IkFkbWluIiwic3ViIjoiMzNlNzMxM2ItOTBkOC00NWQyLThjZWYtNzUyN2Y0ZTEwMzFjIiwidXNlcm5hbWUiOiJhZG1pbkBtaW5laXJvLmNvbSJ9.lvC_LdYZ8bvbmjWLbC8TH7AdrBqii2Ah8b1ZkMK3Vkk'

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenPonto1}`, // 🔑 Adiciona o token fixo
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`)
  }

  return response.json()
}
