const { Router } = require("express");
const authorRouter = Router();

const {
  addAuthor,
  getBooksByAuthor,
  getBooksByAuthorId,
} = require("./controllers");

authorRouter.get("/author/getBooksByAuthor/:author", getBooksByAuthor);
authorRouter.post("/author/addAuthor", addAuthor);
authorRouter.get("/author/getBooksByAuthorId/:authorName", getBooksByAuthorId);

module.exports = authorRouter;
