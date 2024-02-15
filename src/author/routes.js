const { Router } = require("express");
const authorRouter = Router();

const { addAuthor, getBooksByAuthor } = require("./controllers");

authorRouter.get("/author/getBooksByAuthor/:author", getBooksByAuthor);
authorRouter.post("/author/addAuthor", addAuthor);

module.exports = authorRouter;
