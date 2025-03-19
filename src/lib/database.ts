import { createClient } from '@supabase/supabase-js' // Importando o cliente do Supabase

// Crie uma instância do Supabase com sua URL e chave de API
const supabase = createClient(
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default supabase
