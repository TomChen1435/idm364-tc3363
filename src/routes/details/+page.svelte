<script>
    import Header from '$lib/assets/Header.svelte';
    import Footer from '$lib/assets/Footer.svelte';
    import Card from '$lib/assets/Card.svelte';
    import Quantity from '$lib/assets/Quantity.svelte';
    
    const { data } = $props();
    const { tickets, stations } = data;

    const ticket = tickets[0];

    const origin = stations.find(station => {return station.station_code === ticket.origin_code});
    const destination = stations.find(station => {return station.station_code === ticket.destination_code});
</script>

<Header />

<main>
    <Card 
        service = {ticket.service}
        train_number = {ticket.train_number}

        origin = {origin}
        destination = {destination}

        departure_time_8601 = {ticket.departure_time}
        arrival_time_8601 = {ticket.arrival_time}
            
        seat_class = {ticket.class}
        price_usd = {ticket.price_usd}
    />

    <div class="final">
        <Quantity />
        <a href="/success" class="text-btn">Purchase Ticket</a>
    </div>
</main>

<Footer />

<style>
    main {
        align-items: center;
        display: flex;
        flex: 1;
        flex-flow: column nowrap;
        justify-content: center;
        justify-self: center;
    }

    div.final {
        align-items: center;
        display: flex;
        flex-wrap: nowrap;
        gap: var(--gap16);
        max-width: 33.25rem;
        width: 100%;
    }

    @media (width < 25rem) {
        div.final {
            flex-direction: column;
            gap: var(--gap8);
            justify-content: center;
        }
    }

    @media (25rem <= width) {
        div.final {
            flex-direction: row;
            gap: var(--gap8);
            justify-content: space-between;
        }
    }
</style>
