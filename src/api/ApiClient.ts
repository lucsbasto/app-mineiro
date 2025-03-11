export const apiClient = async (endpoint: string, options?: RequestInit) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  const endpointUrl = `${baseUrl}${endpoint}`;

  const response = await fetch(endpointUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.status}`);
  }

  return response.json();
};
