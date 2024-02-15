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

// const getBooksByAuthor = async (req, res) => {
//   try {
//     const authorName = req.params.author;
//     const books = await Book.findAll({
//       where: { author: authorName },
//       include: "Genre",
//     });
//     res.send({ message: "Books found", books: books });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error: error });
//   }
// };

// const getBooksByAuthor = async (req, res) => {
//   try {
//     const authorName = req.params.author; // Extract author name from request parameters

//     // Step 1: Find the Author by Name
//     const author = await Author.findall({ where: { name: authorName } });

//     if (!author) {
//       return res.status(404).json({ message: "Author not found" });
//     }

//     // Step 2: Get the Author's ID
//     const authorId = author.id;

//     // Step 3: Find Books by Author ID
//     const authorsBooks = await Book.findAll({ where: { AuthorId: authorId } });

//     res.send({ message: "Books found by author", books: authorsBooks });
//   } catch (error) {
//     res.status(500).json({ message: error.message, error: error });
//   }
// };

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
