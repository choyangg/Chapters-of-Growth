import db from "$lib/db.js";

export async function load() {
  const quotes = await db.getQuotes();
  const books = await db.getBooks();

  // Map bookId to book title
  const bookMap = books.reduce((map, book) => {
    map[book._id] = book.title;
    return map;
  }, {});

  // Attach book titles to quotes
  const quotesWithBookTitles = quotes.map((quote) => ({
    ...quote,
    bookTitle: bookMap[quote.bookId] || "None",
  }));

  return {
    // Neueste Quotes zuerst anzeigen
    quotes: quotesWithBookTitles.reverse(),
  };
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    try {
      const success = await db.deleteQuote(data.get("id")); // Löscht Quote und gibt Erfolg zurück

      if (!success) {
        console.log("Failed to delete the quote.");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  },
};
