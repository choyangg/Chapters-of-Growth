<script>
  import BookCarousel from "$lib/components/BookCarousel.svelte";

  export let data;
  const { books } = data;
</script>

<section class="intro">
  <h1>Welcome to Your Self-Help Library</h1>
  <img src="/images/buechern.webp" alt="Stack of Books" class="intro-image" />
</section>

<section class="book-gallery">
  <h2>Discover books that inspire and empower you</h2>
  <BookCarousel books={books} />
</section>

<style>
  .intro {
    text-align: center;
    padding: 40px 20px;
    background-color: #f8f9fa;
  }

  .intro h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
  }

  .intro-image {
    max-width: 80%;
    height: auto;
    border-radius: 10px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .book-gallery {
    text-align: center;
    padding: 40px 20px;
    background-color: #ffffff;
  }

  .book-gallery h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #555;
  }
</style>
