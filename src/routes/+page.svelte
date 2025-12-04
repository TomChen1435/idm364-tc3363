<script>
    import Header from '$lib/assets/Header.svelte';
    import Footer from '$lib/assets/Footer.svelte';
    import Card from '$lib/assets/Card.svelte';
    
    const { data } = $props();
    const { stations, tickets } = data;

    $inspect(stations);
    $inspect(tickets);
</script>

<Header />

{#each stations as station}
<p>{station.name}</p>
{/each}

<!-- <main>

    {#each data.data_set.tickets as t_info}
        <a href="">
            <Card 
                service = {t_info.service}
                train_number = {t_info.train_number}

                origin_state = "PA"
                origin_city = "Cornwells Heights"
                origin_station = "Cornwells Heights"

                destination_state = "PA"
                destination_city = "Philadelphia"
                destination_station = "North Philadelphia"

                departure_time_8601 = {t_info.departure_time}
                departure_time = "08:00"
                arrival_time_8601 = {t_info.arrival_time}
                arrival_time = "08:35"
                duration = "0h 35min"

                seat_class = {t_info.class}
                price_usd = {t_info.price_usd}
            />
        </a>
    {/each}

</main> -->

<Footer />
