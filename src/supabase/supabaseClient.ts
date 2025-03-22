import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jdnnhpkgrugqtpwfozux.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkbm5ocGtncnVncXRwd2ZvenV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzcyMzUsImV4cCI6MjA1ODA1MzIzNX0.nvjpP5jIcaw4NMiOtbTin2GMlQ05vZjEkXigW908svk";

// Create a single supabase client for interacting with your database
export const supabaseClient = createClient(supabaseUrl, supabaseKey);
