<script>
    import Header from '$lib/assets/Header.svelte';
    import Footer from '$lib/assets/Footer.svelte';
    import Card from '$lib/assets/Card.svelte';
    
    const { data } = $props();
    const { stations, tickets } = data;
</script>

<Header />

<main>
    {#each tickets as ticket}
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
    {/each}
</main>

<Footer />

<style>
    main {
        max-width: 102.75rem;
    }

    @media (width < 36.25rem) {
        main {
            grid-template-columns: 1fr;
        }
    }

    @media (36.25rem <= width < 54rem) {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (54rem <= width) {
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
