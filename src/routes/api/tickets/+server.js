import { supabase } from '$lib/supabase';
import { json } from '@sveltejs/kit';

export async function GET() {  

    const { data, error } = await supabase.from('tickets').select('*')

    if (error) {return json({ error: error.message }, { status: 500 });}

    return json(data, { status: 200 });

}