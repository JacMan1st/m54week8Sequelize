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

module.exports = {
  getBooksByAuthor: getBooksByAuthor,
  addAuthor: addAuthor,
};
