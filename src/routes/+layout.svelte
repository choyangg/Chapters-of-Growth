<script>
    import "./styles.css";
    let { children } = $props();
</script>

<header>
  <nav class="navbar navbar-expand-lg bg-primary text-light" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Home</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/books">Books</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/quotes">Quotes</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

<main class="container mt-4">
  {@render children()}
</main>