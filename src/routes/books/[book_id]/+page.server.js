import db from "$lib/db.js";

export async function load({ params }) {
    console.log(params.book_id);

    return {
      book: await db.getBook(params.book_id),
      quotes: await db.getQuotesByBookId(params.book_id),
    };
    
}

export const actions = {
  delete: async ({ request }) => {
    const data = await request.formData();
    try {
      const success = await db.deleteQuote(data.get("id"));

      if (!success) {
        console.log("Failed to delete the quote.");
      }
    } catch (error) {
      console.error("Error during deletion:", error);
    }
  },
};