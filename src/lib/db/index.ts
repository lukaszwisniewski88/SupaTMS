import { createClient } from '@supabase/supabase-js';

const db = createClient(import.meta.env.VITE_PUBLIC_DB_URL, import.meta.env.VITE_PUBLIC_ANON_KEY);

export { db };
