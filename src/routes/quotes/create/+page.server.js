import db from "$lib/db.js";

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let quote = {
      text: data.get("text"),
      quoteBy: data.get("quoteBy"),
      bookId: data.get("bookId") || null,
    };

    await db.createQuote(quote);

    return { success: true };
  },
};
