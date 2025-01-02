<script>
  // Bücher-Daten werden von der Seite übergeben
  export let books = [];

  // Startindex für das Karussell
  let startIndex = 0;
  const itemsPerView = 4; // Anzahl der sichtbaren Bücher

  // Funktion zum Zurückblättern im Karussell
  function prev() {
    startIndex = (startIndex - itemsPerView + books.length) % books.length;
  }

  // Funktion zum Weiterblättern im Karussell
  function next() {
    startIndex = (startIndex + itemsPerView) % books.length;
  }
</script>

<div class="carousel">
  <!-- Linker Pfeil -->
  <button class="arrow left" on:click={prev}>&#10094;</button>

  <!-- Bücher im Karussell -->
  <div class="carousel-container">
    {#each books.slice(startIndex, startIndex + itemsPerView) as book}
      <a href={`/books/${book._id}`} class="book-card">
        <img src={book.cover} alt={book.title} class="book-cover" />
        <div class="book-details">
          <h5 class="book-title">{book.title}</h5>
          <p class="book-author">by {book.author}</p>
          <p class="book-year">{book.year}</p>
        </div>
      </a>
    {/each}
  </div>

  <!-- Rechter Pfeil -->
  <button class="arrow right" on:click={next}>&#10095;</button>
</div>

<style>
  /* Stil des Karussells */
  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Gleichmäßige Verteilung */
    gap: 10px;
    max-width: 90%;
    margin: 0 auto;
    position: relative; /* Für absolute Positionierung der Pfeile */
  }

  .arrow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #007bff;
    transition: color 0.3s, transform 0.3s;
    position: absolute; /* Positioniere die Pfeile */
    top: 50%; /* Vertikale Mitte */
    transform: translateY(-50%); /* Zentriere die Pfeile */
  }

  .arrow.left {
    left: -40px; /* Abstand vom linken Rand des Karussells */
  }

  .arrow.right {
    right: -40px; /* Abstand vom rechten Rand des Karussells */
  }

  .carousel-container {
    display: flex;
    gap: 20px;
    overflow: hidden;
    flex: 1;
    justify-content: center; /* Zentriere die Bücher */
  }

  /* Einheitlicher Stil für Bücher */
  .book-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s; /* Weiche Übergänge */
    padding: 15px;
    width: 100%;
  }

  .book-card:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .book-cover {
    width: 100%;
    height: 200%;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .book-details {
    text-align: left;
    width: 100%;
  }

  .book-title {
    font-size: 1.02rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .book-author {
    font-size: 1rem;
    color: #666;
    margin-bottom: 4px;
  }

  .book-year {
    font-size: 0.9rem;
    color: #999;
  }
</style>
