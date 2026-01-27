import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";

let supabase: SupabaseClient<Database> | null = null;

function getSupabase() {
  if (!supabase) {
    supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );
  }
  return supabase;
}

export async function addData({data}: {data: Database['public']['Tables']['demo_form']['Insert']}) : Promise<void> {
  const { error } = await getSupabase()
    .from('demo_form')
    .insert(data);

  if (error) {
    console.log('Supabase insert error:', error);
    throw new Error('Error inserting data');
  }
}

export async function addDataQuestion({data}: {data: Database['public']['Tables']['questions_form']['Insert']}) : Promise<void> {
  const { error } = await getSupabase()
    .from('questions_form')
    .insert(data);

  if (error) {
    console.log('Supabase insert error:', error);
    throw new Error('Error inserting data');
  }
}