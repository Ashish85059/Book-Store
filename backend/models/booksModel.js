const mongoose = require("mongoose");

// Define the book schema with mongoose.Schema
const bookSchema = new mongoose.Schema({
    bookname: {
      type: String,
      required: true,
    },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create a model from the schema
const Book = mongoose.model("Book", bookSchema);  // "Book" is the collection name

// Export the model
module.exports = Book;
