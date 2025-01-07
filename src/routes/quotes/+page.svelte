<script>
    import QuoteCard from "$lib/components/QuoteCard.svelte";

    export let data;
    const { quotes } = data; 
</script>

<div class="intro">
    <h1>Welcome to Your Inspirational Quotes</h1>
    <p>Discover quotes that inspire and empower you to achieve your dreams.</p>
    <img src="/images/inspirationalBackground.jpg" alt="Inspiration" class="intro-image" />
    <a href="/quotes/create" class="add-quote-button">Add Your Inspirational Quotes</a>
</div>

<div class="quotes-container">
    {#if quotes.length > 0}
        {#each quotes as quote}
            <QuoteCard {quote} />
        {/each}
    {:else}
        <p>No quotes available at the moment. Add some to inspire others!</p>
    {/if}
</div>

<style>
    .intro {
        text-align: center;
        padding: 20px;
        background-color: #f8f9fa;
    }

    .intro h1 {
        font-size: 2rem;
        margin-bottom: 10px;
    }

    .intro p {
        font-size: 1.2rem;
        color: #555;
        margin-bottom: 20px;
    }

    .intro-image {
        max-width: 70%;
        height: auto;
        border-radius: 10px;
        margin: 20px auto;
    }

    .add-quote-button {
        display: inline-block;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        padding: 15px 30px;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: bold;
        transition: background-color 0.3s;
        margin-top: 20px;
        width: 70%;
        text-align: center;
    }

    .add-quote-button:hover {
        background-color: #0056b3;
    }

    .quotes-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        justify-content: center;
        padding: 20px;
    }
</style>
