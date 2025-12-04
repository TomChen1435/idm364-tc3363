<script>
    let service = "Northeast Regional";
    let train_number = 999;
    let origin = {
        state: "PA",
        city: "Cornwells Heights",
        station: "Cornwells Heights"
    };
    let destination = {
        state: "PA",
        city: "Philadelphia",
        station: "North Philadelphia"
    };
    let departure_time_8601 = "2025-07-03T08:00:00-04:00";
    let departure_time = "08:00";
    let arrival_time_8601 = "2025-07-03T08:35:00-04:00";
    let arrival_time = "08:35";
    let duration = "0h 35min";
    let seat_class = "Business";
    let price_usd = 999;
</script>

<section class="card">
    <h1 class="service">{service} <span class="train_number">#{train_number}</span></h1>
    <section class="station origin">
        <div class="tertiary">
            <p class="direction">FROM</p>
            <p class="location">{origin.city}, {origin.state}</p>
        </div>
        <h2 class="station_name">{origin.station}</h2>
    </section>
    <section class="station destination">
        <div class="tertiary">
            <p class="direction">TO</p>
            <p class="location">{destination.city}, {destination.state}</p>
        </div>
        <h2 class="station_name">{destination.station}</h2>
    </section>
    <section class="times">
        <div class="major departure">
            <p class="prompt">Departure</p>
            <p class="timestamp">{departure_time}</p>
        </div>
        <div class="secondary duration">
            <p class="prompt">Duration</p>
            <p class="time_frame">{duration}</p>
        </div>
        <div class="major arrival">
            <p class="prompt">Arrival</p>
            <p class="timestamp">{arrival_time}</p>
        </div>
    </section>
    <div class="price">
        <p class="seat_class">{seat_class}</p>
        <p class="price_tag">${price_usd}</p>
    </div>
</section>

<style>
    section, div {
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
    }

    div {
        align-items: center;
        justify-content: space-between;
    }

    section.card {
        align-items: center;
        background-color: var(--ios-gray-6-alt);
        flex-direction: column;
        gap: var(--gap8);
        min-width: 18.5rem;
        padding: var(--gap12) var(--gap8);
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
        font-size: 0.875rem;
    }

    div.tertiary > p.location {
        text-align: right;
    }

    h2.station_name {
        font-size: 1.5rem;
    }

    section.times {
        background-color: var(--apple-yellow);
    }

    div.major > p {
        font-weight: 550;
    }

    div.major > p.prompt {
        font-size: 1.25rem;
    }

    div.major > p.timestamp {
        font-size: 1.5rem;
    }

    div.secondary > p {
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
</style>
