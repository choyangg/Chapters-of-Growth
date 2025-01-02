<script>
  import BookCard from '$lib/components/BookCard.svelte';
  export let data;
  const { books } = data;
</script>

<div class="container-fluid">
  <div class="row g-4"> <!-- Reduzierter Abstand mit g-3 -->
    {#each books as book}
    <div class="col-6 col-md-4 col-lg-3 d-flex"> <!-- Gleiche Höhe der Karten -->
        <BookCard book={book} />
      </div>
    {/each}
  </div>
</div>

<style>
  .container-fluid {
    padding: 0 10px; /* Geringere Seitenränder */
  }

  .row {
    justify-content: center; /* Zentriere die Karten in der Reihe */
  }

  .col-lg-3 {
    display: flex;
    align-items: stretch; /* Karten haben gleiche Höhe */
  }
</style>


