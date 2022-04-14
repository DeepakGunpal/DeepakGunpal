const express = require("express");
const router = express.Router();
const moment = require("moment");

const BookController = require("../controllers/allController");

router.post("/createBook", BookController.createBook);
router.post("/createAuthor", BookController.createAuthor);

router.get("/getBooksData", BookController.getBooksData);

router.post("/updateBooks", BookController.updateBooks);

router.get("/authorName", BookController.authorName);

module.exports = router;
