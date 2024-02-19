const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  getAllBooks,
  dynamicUpdateAuthor,
  // dynamicUpdateTitle,
  deleteBookByTitle,
  deleteAllBooks,
} = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.put("/books/dynamicUpdateAuthor", dynamicUpdateAuthor);
// bookRouter.put("/books/dynamicUpdateTitle", dynamicUpdateTitle);
bookRouter.delete("/books/deleteBookByTitle", deleteBookByTitle);
bookRouter.delete("/books/deleteAllBooks", deleteAllBooks);

module.exports = bookRouter;
