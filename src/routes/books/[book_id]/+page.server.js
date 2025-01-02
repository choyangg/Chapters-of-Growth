import db from "$lib/db.js";

export async function load({ params }) {
    console.log(params.book_id);

    // Lade das Buch basierend auf der Buch-ID
    const book = await db.getBook(params.book_id);

    // Lade alle Quotes, die mit diesem Buch verknüpft sind
    const quotes = await db.getQuotesByBookId(params.book_id);

    return {
        book,    // Buchdetails
        quotes,  // Zugehörige Quotes
    };
}
