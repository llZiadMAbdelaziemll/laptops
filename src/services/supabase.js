import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wgneqcbjnmdsacxkfuvy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbmVxY2Jqbm1kc2FjeGtmdXZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzODY4NDEsImV4cCI6MjAyNDk2Mjg0MX0.U5wv0JRbjEpyWjwZ47iITQxylSbloFCpltfY310oca0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
