import { MongoClient, ObjectId } from "mongodb"; 
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("SchlussProjektDB"); 

async function getBooks() {
  let books = [];
  try {
    const collection = db.collection("books");
    const query = {};
    books = await collection.find(query).toArray();
    books.forEach((book) => {
      book._id = book._id.toString(); 
    });
  } catch (error) {
    console.log(error);
    
  }
  return books;
}


async function getBook(id) {
  let book = null;
  try {
    const collection = db.collection("books");
    const query = { _id: new ObjectId(id) }; 
    book = await collection.findOne(query);

    if (!book) {
      console.log("No book with id " + id);
      
    } else {
      book._id = book._id.toString(); 
    }
  } catch (error) {
    console.log(error.message);
  }
  return book;
}


async function getQuotes() {
  let quotes = [];
  try {
    const collection = db.collection("quotes");
    const query = {};
    quotes = await collection.find(query).toArray();
    quotes.forEach((quote) => {
      quote._id = quote._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return quotes;
}


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


async function deleteQuote(id) {
  try {
    const collection = db.collection("quotes");
    const query = { _id: new ObjectId(id) }; 
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No quote with id " + id);
      return false; 
    } else {
      console.log("Quote with id " + id + " has been successfully deleted.");
      return true; 
    }
  } catch (error) {
    console.error("Error deleting quote: " + error.message);
    return false; 
  }
}


async function getQuotesByBookId(bookId) {
  let quotes = [];
  try {
    const collection = db.collection("quotes");
    const query = { bookId: bookId }; 
    quotes = await collection.find(query).toArray();
    quotes.forEach((quote) => {
      quote._id = quote._id.toString(); 
    });
  } catch (error) {
    console.log(error);
  }
  return quotes;
}

export default {
  getBooks,
  getBook,
  getQuotes,
  getQuotesByBookId, 
  createQuote,
  deleteQuote,
};
