import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let quote = {
      text: data.get("text"),
      quoteBy: data.get("quoteBy"),
      bookId: data.get("bookId") || null,
    };

    try {
      await db.createQuote(quote);
      return { success: true };
    } catch (error) {
      console.error("Error creating quote:", error);
      return { success: false };
    }
  },
};
