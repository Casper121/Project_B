import { createClient } from "@supabase/supabase-js";

// Supabase-URL & API-Key aus Umgebungsvariablen oder hartkodiert einfügen
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL || "https://your-project-url.supabase.co";
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "your-anon-key";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error("supabaseUrl is required.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;
