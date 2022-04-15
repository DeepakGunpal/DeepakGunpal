const authorModel = require("../models/authorModel");
const publisherModel = require("../models/publisherModel");
const bookModel = require("../models/bookModel");

const createAuthor = async function (req, res) {
  let author = req.body;
  let authorCreated = await authorModel.create(author);
  res.send({ data: authorCreated });
};

const createPublisher = async function (req, res) {
  let publisher = req.body;
  let publisherCreated = await publisherModel.create(publisher);
  res.send({ data: publisherCreated });
};

const createBook = async function (req, res) {
  let book = req.body;
  let bookCreated = await bookModel.create(book);
  res.send({ data: bookCreated });
};

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
  let specificBook = await bookModel
    .find()
    .populate("author")
    .populate("publisher");
  res.send({ data: specificBook });
};

module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;

module.exports.getBooksWithAuthorAndPublisherDetails =
  getBooksWithAuthorAndPublisherDetails;
