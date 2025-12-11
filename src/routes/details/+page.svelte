<script>
    import Header from '$lib/assets/Header.svelte';
    import Footer from '$lib/assets/Footer.svelte';
    import Card from '$lib/assets/Card.svelte';

    import { cart_content } from '$lib/store.js';
    
    const { data } = $props();
    const { tickets, stations } = data;

    const ticket = tickets[0];
</script>

<Header />

<main>
    <Card 
        service = {ticket.service}
        train_number = {ticket.train_number}

        origin = {stations.find(station => {return station.station_code === ticket.origin_code})}
        destination = {stations.find(station => {return station.station_code === ticket.destination_code})}

        departure_time_8601 = {ticket.departure_time}
        arrival_time_8601 = {ticket.arrival_time}
            
        seat_class = {ticket.class}
        price_usd = {ticket.price_usd}
    />
</main>

<Footer />
