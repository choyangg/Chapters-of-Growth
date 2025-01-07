<script>
  let { form } = $props();

</script>

<a href="/quotes" class="back-button">← Back</a>

<section class="add-quote-section">
  <h1>Add a Quote</h1>

  <p class="info-text">
    All fields marked with 
    <span class="required">*</span> are required.
  </p>

  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="text" class="form-label">Quote Text<span class="required">*</span></label>
      <textarea
        name="text"
        id="text"
        class="form-control"
        rows="4"
        required
      ></textarea>
    </div>

    <div class="mb-3">
      <label for="quoteBy" class="form-label">Author of Quote<span class="required">*</span></label>
      <input 
      name="quoteBy" 
      id="quoteBy" 
      class="form-control" 
      type="text" 
      required 
      />
    </div>

    <div class="mb-3">
      <label for="bookId" class="form-label">Related Book (Optional)</label>
      <select 
      name="bookId" 
      id="bookId" 
      class="form-select">
      
        <option value="">None</option>
        <option value="64b0c7ea2b8e4c001c2f6d01">The Subtle Art of Not Giving a F*ck</option>
        <option value="64b0c7ea2b8e4c001c2f6d02">Atomic Habits</option>
        <option value="64b0c7ea2b8e4c001c2f6d03">The 7 Habits of Highly Effective People</option>
        <option value="64b0c7ea2b8e4c001c2f6d04">Can't Hurt Me</option>
        <option value="64b0c7ea2b8e4c001c2f6d05">Think and Grow Rich</option>
        <option value="64b0c7ea2b8e4c001c2f6d06">Deep Work</option>
        <option value="64b0c7ea2b8e4c001c2f6d08">The Power of Now</option>
        <option value="64b0c7ea2b8e4c001c2f6d10">Ikigai</option>
        <option value="64b0c7ea2b8e4c001c2f6d12">Mindset</option>
        <option value="64b0c7ea2b8e4c001c2f6d13">Grit</option>
        <option value="64b0c7ea2b8e4c001c2f6d14">The Alchemist</option>
        <option value="64b0c7ea2b8e4c001c2f6d15">How to Win Friends and Influence People</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Add Quote</button>
  </form>

  {#if form?.success === true}
  <p class="text-success">Quote successfully added!</p>
{:else if form?.success === false}
  <p class="text-error">Error adding quote. Please try again.</p>
{/if}
</section>

<style>
  .add-quote-section {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
  }

  .info-text {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  }

  .required {
    color: red;
  }

  .text-success {
    color: #155724;
    font-weight: bold;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem; 
  }

  .text-error {
    color: #721c24;
    font-weight: bold;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
}

</style>
