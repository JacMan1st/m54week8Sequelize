const { Router } = require("express");
const genreRouter = Router();

const { addGenre, getAllGenres, getBooksByGenreId } = require("./controllers");

genreRouter.post("/genres/addGenre", addGenre);
genreRouter.get("/genres/getAllGenres", getAllGenres);
genreRouter.get("/genres/getBooksByGenreId/:genreName", getBooksByGenreId);

module.exports = genreRouter;
