<script>
    let { service, train_number, origin, destination, departure_time_8601, arrival_time_8601, seat_class, price_usd } = $props();

    // Create snake case class names
    function snakecase(string) {
        const stringLowerCase = string.toLowerCase();
        const stringSnakeCase = stringLowerCase.replace(/\s/g, "_");
        return stringSnakeCase;
    }
    const service_snakecase = snakecase(service);
    const origin_snakecase = snakecase(origin.station);

    // Create strings of 24-hour timestamps
    function timestamp(date8601) {
        const dateObject = new Date(date8601);
        const time24Hour = dateObject.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'UTC'
        });
        return time24Hour
    }
    const departure_time = timestamp(departure_time_8601);
    const arrival_time = timestamp(arrival_time_8601);

    // Calculate trip durations
    const duration_ms = new Date(arrival_time_8601) - new Date(departure_time_8601);
    const duration_mins_raw = duration_ms / 1000 / 60;
    const duration_hours = Math.floor(duration_mins_raw / 60); 
    const duration_mins = Math.floor(duration_mins_raw % 60); 
    let duration = $state("");
    if (duration_hours === 0) {
        duration = `${duration_mins}min`;
    } else {
        duration = `${duration_hours}h ${duration_mins}min`;
    }
</script>

<a class="card {service_snakecase} {origin_snakecase}" href="/details?train_number={train_number}">
    <h1 class="service">{service} <span class="train_number">#{train_number}</span></h1>

    <section class="station origin">
        <div class="tertiary">
            <p class="direction">FROM</p>
            <p class="location">{origin.station}</p>
        </div>
        <h2 class="station_name">{origin.city}&#44; {origin.state}</h2>
    </section>

    <section class="station destination">
        <div class="tertiary">
            <p class="direction">TO</p>
            <p class="location">{destination.station}</p>
        </div>
        <h2 class="station_name">{destination.city}&#44; {destination.state}</h2>
    </section>

    <section class="times">
        <div class="primary departure">
            <p class="prompt">Departure</p>
            <p class="timestamp">{departure_time}</p>
        </div>
        <div class="secondary duration">
            <p class="prompt">Duration</p>
            <p class="time_frame">{duration}</p>
        </div>
        <div class="primary arrival">
            <p class="prompt">Arrival</p>
            <p class="timestamp">{arrival_time}</p>
        </div>
    </section>

    <div class="price">
        <p class="seat_class">{seat_class}</p>
        <p class="price_tag">${price_usd}</p>
    </div>
</a>

<style>
    a.card, section, div {
        display: flex;
        flex-flow: row nowrap;
        width: 100% !important;
    }

    div {
        align-items: center;
        justify-content: space-between;
    }

    a.card {
        align-items: center;
        background-color: var(--ios-gray-6-alt);
        flex-direction: column;
        gap: var(--gap8);
        max-width: 33.25rem;
        min-width: 17rem;
        padding: var(--gap8);
    }

    h1.service {
        color: var(--white);
        font-size: 1.25rem;
        font-weight: 400;
        text-align: center;
    }

    h1.service > span.train_number {
        font-weight: 600;
    }

    section.station, section.times {
        flex-direction: column;
        gap: var(--gap4);
        padding: var(--gap8);
    }

    section.station {
        background-color: var(--ios-gray-6);
    }

    div.tertiary > p {
        color: var(--black);
        font-size: 0.875rem;
    }

    div.tertiary > p.location {
        text-align: right;
    }

    h2.station_name {
        color: var(--black);
        font-size: 1.5rem;
    }

    section.times {
        background-color: var(--apple-yellow);
    }

    div.primary > p {
        color: var(--black0);
        font-weight: 550;
    }

    div.primary > p.prompt {
        font-size: 1.25rem;
    }

    div.primary > p.timestamp {
        font-size: 1.5rem;
    }

    div.secondary > p {
        color: var(--black0);
        font-size: 1rem;
    }

    div.price {
        padding: 0 var(--gap8);
    }

    div.price > p {
        color: var(--white);
    }

    div.price > p.seat_class {
        font-size: 1.25rem;
        font-weight: 550;
    }

    div.price > p.price_tag {
        font-size: 1.5rem;
        font-weight: 600;
    }

    a.card:hover section.times {
        background-color: var(--apple-orange);
    }
</style>
