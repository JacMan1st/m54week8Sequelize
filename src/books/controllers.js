const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      AuthorId: req.body.AuthorId,
      GenreId: req.body.GenreId,
    });

    res.status(201).json({ message: `${book.title} was added.`, book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({ include: ["Genre", "Author"] });
    res.send({ message: "got all books successfully", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const dynamicUpdate = async (req, res) => {
  try {
    const { title, author } = req.body;
    const book = await Book.findOne({ where: { title: title } });

    if (author) {
      book.author = author;
    }
    if (req.body.newTitle) {
      book.title = req.body.newTitle;
    }

    await book.save();
    res.status(200).json({ message: "Updated book successfully", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  dynamicUpdate: dynamicUpdate,
};
