<script>
  let { book } = $props(); // Buchdaten werden als Prop übergeben
</script>

<a href={`/books/${book._id}`} class="book-card">
  <img src={book.cover} alt={book.title} class="book-cover" />
  <div class="book-details">
    <h5 class="book-title">{book.title}</h5>
    <p class="book-author">by {book.author}</p>
    <p class="book-year">{book.year}</p>
  </div>
</a>


<style>
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
    transform: scale(1.03); /* Vergrößert die Karte leicht */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .book-cover {
    width: 100%;
    aspect-ratio: 2 / 3; /* Breite:Höhe-Verhältnis */
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
