<script>
  export let quote;
</script>

<div class="quote-card">
  <div class="quote-text">
    <p class="quote-text-content">"{quote.text}"</p>
    <p class="quote-author">- {quote.quoteBy}</p>
  </div>
  <div class="quote-details">
    {#if quote.bookTitle}
      <p>
        <strong>Book:</strong>
        <a href={`/books/${quote.bookId}`}>{quote.bookTitle}</a>
      </p>
    {:else}
      <p><strong>Book:</strong> None</p>
    {/if}

    <!-- Formular für das Löschen mit Bestätigung -->
    <form
      method="POST"
      action="?/delete"
      on:submit={(event) => {
        if (!confirm("Are you sure you want to delete this quote?")) {
          event.preventDefault(); // Verhindert das Absenden des Formulars
        }
      }}
    >
      <input type="hidden" name="id" value={quote._id} />
      <button type="submit" class="delete-button" aria-label="Delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </button>
    </form>
  </div>
</div>

<style>
  .quote-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 10px;
  }

  .quote-text-content {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }

  .quote-author {
    font-size: 1rem;
    color: #666;
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  
</style>
