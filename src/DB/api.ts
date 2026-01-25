import { createClient } from "@supabase/supabase-js";
import { Database } from "../../database.types";
import { Suspense } from "react";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!);

export async function addData({data}: {data: Database['public']['Tables']['demo_form']['Insert']}) : Promise<void> {

    try {
        const { error } = await supabase
        .from('demo_form').insert({ nom: data.nom, courriel: data.courriel, entreprise: data.entreprise, poste: data.poste, industrie: data.industrie, taille: data.taille });

        if (error) {
            console.log('Supabase insert error:', error);
            throw new Error('Error inserting data into demo_form table');   
        }

    } catch(error) {
        console.log('Error adding data to demo_form table:', error);
        throw error;
    }
}