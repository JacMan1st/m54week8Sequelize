const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: `${book.title} was added.`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({});
    res.send({ message: "got all books successfully", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.findOne({ where: { title: title } });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.author = author;
    await book.save();
    res
      .status(200)
      .json({ message: "Updated author successfully", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  updateAuthor: updateAuthor,
};
