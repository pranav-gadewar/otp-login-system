import { createClient } from "@supabase/supabase-js";

// ✅ Client for frontend usage (public)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ✅ Secure server-side client (uses private URL + service role key)
export const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,               // ✅ FIXED HERE
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);
