const Book = require("../books/model");
const Genre = require("./model");

const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genrename: req.body.genrename,
      genreId: req.body.genreId,
    });

    res.status(201).json({ message: `${genre.title} was added`, genre: genre });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();
    res.status(200).json({ message: `all genres`, genres: genres });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getBooksByGenreId = async (req, res) => {
  try {
    const genreName = req.params.genreName;
    const genre = await Genre.findOne({
      where: { genrename: genreName },
    });

    const books = await Book.findAll({
      where: { GenreId: genre.id },
    });

    res.status(200).json({ message: "Books found by author", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  addGenre: addGenre,
  getAllGenres: getAllGenres,
  getBooksByGenreId: getBooksByGenreId,
};
