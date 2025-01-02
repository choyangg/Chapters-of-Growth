<script>
  export let data; // Daten werden von der Server-Seite geladen
  const { book, quotes } = data; // Buch-Details und zugehörige Quotes extrahieren

  // Zurück zur vorherigen Seite navigieren
  function goBack() {
    window.history.back();
  }
</script>

<section class="book-detail">
  <!-- Zurück-Button -->
  <button class="back-button" on:click={goBack}>← Back</button>

  <!-- Buchdetails -->
  <div class="book-info">
    <img src={book.cover} alt={book.title} class="book-cover" />
    <div class="details">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>ISBN:</strong> {book.isbn}</p>
      <p><strong>Categories:</strong> {book.categories.join(", ")}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  </div>

  <!-- Zugehörige Quotes anzeigen -->
  <section class="quotes-section">
    <h2>Quotes from this Book</h2>
    {#if quotes.length > 0}
      <ul class="quotes-list">
        {#each quotes as quote}
          <li class="quote-item">
            <p>"{quote.text}"</p>
            <p>- {quote.quoteBy}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No quotes available for this book.</p>
    {/if}
  </section>
</section>

<style>
  /* Gesamtstil der Detailseite */
  .book-detail {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  /* Buch-Info Layout */
  .book-info {
    display: flex;
    gap: 20px;
  }

  .book-cover {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }

  .details {
    flex: 1;
  }

  .details h1 {
    margin-bottom: 10px;
    font-size: 2rem;
    color: #333;
  }

  .details p {
    margin: 5px 0;
    font-size: 1rem;
  }

  .details strong {
    font-weight: bold;
  }

  /* Quotes Section */
  .quotes-section {
    margin-top: 30px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .quotes-section h2 {
    font-size: 1.7rem;
    color: #007bff;
  }

  .quotes-list {
    list-style: none;
    padding: 0;
  }

  .quote-item p:last-child {
  font-size: 0.9rem;
  color: #555;
  font-weight: normal; /* Keine Hervorhebung */
}

  .quote-item {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    
  }

  .quote-item p {
    margin: 5px 0;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    .book-info {
      flex-direction: column; /* Bild und Text untereinander */
      align-items: center; /* Inhalt zentrieren */
    }
  }
  
</style>
