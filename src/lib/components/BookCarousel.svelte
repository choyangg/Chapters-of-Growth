<script>
  export let books = [];

  let startIndex = 0;
  let itemsPerView = calculateItemsPerView();

  function calculateItemsPerView() {
    const width = typeof window !== "undefined" ? window.innerWidth : 0;
    if (width < 600) return 2; 
    if (width < 900) return 3; 
    return 4; 
  }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      itemsPerView = calculateItemsPerView();
    });
  }

  function adjustIndex(index) {
    return (index + books.length) % books.length;
  }

  //links
  function prev() {
    startIndex = adjustIndex(startIndex - itemsPerView);
  }
  //rechts
  function next() {
    startIndex = adjustIndex(startIndex + itemsPerView);
  }
</script>

<div class="carousel">
  <button class="arrow left" on:click={prev}>&#10094;</button>

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

  <button class="arrow right" on:click={next}>&#10095;</button>
</div>

<style>
 
  .carousel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    max-width: 90%;
    margin: 0 auto;
    position: relative;
    position: relative;
  }

  .arrow {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #007bff;
    transition:
      color 0.3s,
      transform 0.3s;
    position: absolute; 
    top: 50%; 
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%);
  }

  .arrow.left {left: -50px;}
  .arrow.right {right: -50px;}

  .carousel-container {
    display: flex;
    gap: 20px;
    flex: 1;
    justify-content: center;
  }

  .book-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s,
      box-shadow 0.2s;
    padding: 15px;
    width: 100%;
  }

  .book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  .book-cover {
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 12px;
  }

  .book-details {
    text-align: left;
    width: 100%;
    min-height: 100px;
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
