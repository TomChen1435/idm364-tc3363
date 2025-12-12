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

    <fieldset>
        <legend>Additional Reservations</legend>
        <div class="option">
            <input type="checkbox" id="bike" name="bike">
            <label for="bike">Bike Rack Spot</label>
        </div>
        <div class="option">
            <input type="checkbox" id="pet" name="pet">
            <label for="pet">Pet Seat</label>
        </div>
    </fieldset>

    <div class="final">
        <Quantity />
        <a href="/success" class="text-btn">Buy Now</a>
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

    fieldset {
        border: 0.25rem solid var(--apple-yellow);
        border-radius: var(--gap12);
        display: flex;
        flex-flow: row wrap;
        gap: var(--gap16);
        justify-content: space-between;
        margin: var(--gap8);
        min-width: 18.5rem;
        padding: var(--gap16);
    }

    legend {
        color: var(--black);
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 120%;
        margin: 0 0.25rem;
        text-align: center;
    }

    div.option {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        gap: var(--gap4);
    }

    input[type="checkbox"] {
        accent-color: var(--apple-blue); 
        height: 1.5rem;
        width: 1.5rem; 
    }

    label {
        color: var(--black);
        font-size: 1.375rem;
        font-weight: 550;
        line-height: 120%;
    }

    div.final {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        max-width: 33.25rem;
        width: 100%;
    }
</style>
