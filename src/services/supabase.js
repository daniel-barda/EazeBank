import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://udsxwoukrdrrvgpkrgwu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkc3h3b3VrcmRycnZncGtyZ3d1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE0ODc5MTYsImV4cCI6MjAyNzA2MzkxNn0.wTlvkIrl2CrIShDtx66vWxjYFFK0XA8RJMS4ewHpu9w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
