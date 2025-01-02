import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("SchlussProjektDB"); // select database

//////////////////////////////////////////
// Books
//////////////////////////////////////////

// Get all books
async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");
    const query = {};
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return books;
}

// Get book by ID
async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; // filter by id
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
      // TODO: errorhandling
    } else {
      book._id = book._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    console.log(error.message);
    // TODO: errorhandling
  }
  return book;
}

//////////////////////////////////////////
// Quotes
//////////////////////////////////////////

// Get all quotes
async function getQuotes() {
  let quotes = [];
  try {
    const collection = db.collection("quotes");
    const query = {};
    quotes = await collection.find(query).toArray();
    quotes.forEach((quote) => {
      quote._id = quote._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return quotes;
}

// Create a new quote
async function createQuote(quote) {
  try {
      const collection = db.collection("quotes");
      const result = await collection.insertOne(quote);
      return result.insertedId.toString();
  } catch (error) {
      console.log(error.message);
  }
  return null;
}


// Delete quote by ID
async function deleteQuote(id) {
  try {
    const collection = db.collection("quotes");
    const query = { _id: new ObjectId(id) }; // Filter by ID
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No quote with id " + id);
      return false; // Löschung nicht erfolgreich
    } else {
      console.log("Quote with id " + id + " has been successfully deleted.");
      return true; // Löschung erfolgreich
    }
  } catch (error) {
    console.error("Error deleting quote: " + error.message);
    return false; // Fehlerfall
  }
}

// Get all quotes by bookId
async function getQuotesByBookId(bookId) {
  let quotes = [];
  try {
    const collection = db.collection("quotes");
    const query = { bookId: bookId }; // Filter nach Buch-ID
    quotes = await collection.find(query).toArray();
    quotes.forEach((quote) => {
      quote._id = quote._id.toString(); // Convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: error handling
  }
  return quotes;
}

export default {
  getBooks,
  getBook,
  getQuotes,
  getQuotesByBookId, // Neue Funktion exportieren
  createQuote,
  deleteQuote,
};
