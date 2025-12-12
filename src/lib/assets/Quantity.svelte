<script>
    let count = $state(1);
    const MIN_COUNT = 1;
    const MAX_COUNT = 9;

    const isPlusDisabled = $derived(count >= MAX_COUNT);
    const isMinusDisabled = $derived(count <= MIN_COUNT);

    function increment(direction) {
        if (direction === "plus" && count < MAX_COUNT) {
            count += 1;
        } else if (direction === "minus" && count > MIN_COUNT) {
            count -= 1;
        }
    }
</script>

<div class="quantity-changer">
    <button 
        id="minus"
        aria-label="minus"
        onclick={() => increment("minus")}
        class:disabled={isMinusDisabled}
        class:normal={!isMinusDisabled}
    >
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9999 21.6633H9.99992C9.55789 21.6633 9.13397 21.4877 8.82141 21.1752C8.50885 20.8626 8.33325 20.4387 8.33325 19.9967C8.33325 19.5546 8.50885 19.1307 8.82141 18.8182C9.13397 18.5056 9.55789 18.33 9.99992 18.33H29.9999C30.4419 18.33 30.8659 18.5056 31.1784 18.8182C31.491 19.1307 31.6666 19.5546 31.6666 19.9967C31.6666 20.4387 31.491 20.8626 31.1784 21.1752C30.8659 21.4877 30.4419 21.6633 29.9999 21.6633Z"/>
        </svg>
    </button>

    <p>{count}</p>

    <button 
        id="plus" 
        aria-label="plus" 
        onclick={() => increment("plus")}
        class:disabled={isPlusDisabled}
        class:normal={!isPlusDisabled}
    >
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.9999 21.6633H21.6666V29.9967C21.6666 30.4387 21.491 30.8626 21.1784 31.1752C20.8659 31.4877 20.4419 31.6633 19.9999 31.6633C19.5579 31.6633 19.134 31.4877 18.8214 31.1752C18.5088 30.8626 18.3333 30.4387 18.3333 29.9967V21.6633H9.99992C9.55789 21.6633 9.13397 21.4877 8.82141 21.1752C8.50885 20.8626 8.33325 20.4387 8.33325 19.9967C8.33325 19.5546 8.50885 19.1307 8.82141 18.8181C9.13397 18.5056 9.55789 18.33 9.99992 18.33H18.3333V9.99665C18.3333 9.55463 18.5088 9.1307 18.8214 8.81814C19.134 8.50558 19.5579 8.32999 19.9999 8.32999C20.4419 8.32999 20.8659 8.50558 21.1784 8.81814C21.491 9.1307 21.6666 9.55463 21.6666 9.99665V18.33H29.9999C30.4419 18.33 30.8659 18.5056 31.1784 18.8181C31.491 19.1307 31.6666 19.5546 31.6666 19.9967C31.6666 20.4387 31.491 20.8626 31.1784 21.1752C30.8659 21.4877 30.4419 21.6633 29.9999 21.6633Z"/>
        </svg>
    </button>
</div>

<style>
    div.quantity-changer {
        align-items: center;
        display: flex;
        flex-flow: row nowrap;
        gap: var(--gap8);
    }

    button {
        align-items: center;
        border: none;
        border-radius: var(--gap12);
        display: flex;
        flex-flow: row nowrap;
        height: 3rem;
        justify-content: center;
        width: 3rem;
    }

    button.normal {
        background-color: var(--apple-blue);
        cursor: pointer;
    }

    button.normal:hover {
        background-color: var(--apple-indigo);
    }

    button.disabled {
        background-color: var(--ios-gray-1);
    }

    button > svg {
        fill: var(--white);
        height: 2.25rem;
        width: 2.25rem;
    }

    p {
        color: var(--black);
        font-size: 1.5rem;
        font-weight: 550;
        text-align: center;
        width: 1.75rem;
    }
</style>
