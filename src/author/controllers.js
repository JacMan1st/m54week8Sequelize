const Book = require("../books/model");
const Author = require("./model");

const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorname: req.body.authorname,
      authorId: req.body.authorId,
    });

    res.status(201).json({ message: `${author.title} was added`, author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const authorName = req.params.author;
    const author = await Author.findAll({
      where: { authorname: authorName },
      include: "Book",
    });
    res.send({ message: "Books found", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByAuthorId = async (req, res) => {
  try {
    const authorName = req.params.authorName;
    const author = await Author.findOne({
      where: { authorname: authorName },
    });

    const books = await Book.findAll({
      where: { AuthorId: author.id },
    });

    res.status(200).json({ message: "Books found by author", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  getBooksByAuthor: getBooksByAuthor,
  addAuthor: addAuthor,
  getBooksByAuthorId: getBooksByAuthorId,
};
