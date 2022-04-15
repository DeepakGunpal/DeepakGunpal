const express = require("express");
const router = express.Router();

const Controller = require("../controllers/Controller");

router.post("/createAuthor", Controller.createAuthor);
router.post("/createPublisher", Controller.createPublisher);
router.post("/createBook", Controller.createBook);

router.get(
  "/getBooksWithAuthorAndPublisherDetails",
  Controller.getBooksWithAuthorAndPublisherDetails
);

module.exports = router;
