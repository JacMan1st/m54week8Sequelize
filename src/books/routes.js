const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks, dynamicUpdate } = require("./controllers");

bookRouter.post("/books/addBook", addBook);
bookRouter.get("/books/getAllBooks", getAllBooks);
bookRouter.put("/books/dynamicUpdate", dynamicUpdate);

module.exports = bookRouter;
