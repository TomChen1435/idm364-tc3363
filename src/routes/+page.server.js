import { supabase } from '$lib/supabase';

export async function load() {  

    const { data: stations, error: stationsError } = await supabase.from('stations').select('*')
    if (stationsError) console.error('Error: ', stationsError)
    else console.log('stations', stations)

    const { data: tickets, error: ticketsError } = await supabase.from('tickets').select('*')
    if (ticketsError) console.error('Error: ', ticketsError)
    else console.log('tickets', tickets)

    return {
        stations: stations ?? [],
        tickets: tickets ?? []
    }

}
