const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, updateAuthor } = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor);

module.exports = bookRouter;
