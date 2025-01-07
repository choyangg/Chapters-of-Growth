<script>
  import BookCard from '$lib/components/BookCard.svelte';
  export let data;
  const { books } = data;
</script>

<div class="container-fluid">
  <div class="row g-4">
    {#each books as book}
    <div class="col-6 col-md-4 col-lg-3 d-flex">
        <BookCard book={book} />
      </div>
    {/each}
  </div>
</div>