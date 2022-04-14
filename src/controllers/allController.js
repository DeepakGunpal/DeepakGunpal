const { count } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

const createBook = async function (req, res) {
  let data = req.body;

  let savedData = await BookModel.create(data);
  res.send({ Result: savedData });
};

const createAuthor = async function (req, res) {
  let data = req.body;

  let savedData = await AuthorModel.create(data);
  res.send({ Result: savedData });
};

const getBooksData = async function (req, res) {
  const booksByCb = await AuthorModel.find({ authorName: "J.k Rowling" });
  const id = booksByCb[0].author_id;
  const bookName = await BookModel.find({ author_id: id }).select({
    bookName: 1,
  });
  res.send({ Result: bookName });
};

const updateBooks = async function (req, res) {
  const book = await BookModel.find({ bookName: "Two states" });
  const id = book[0].author_id;
  const author = await AuthorModel.find({ author_id: id }).select({
    authorName: 1,
  });

  const book_name = book[0].bookName;
  const newPrice = await BookModel.findOneAndUpdate(
    { bookName: book_name },
    { price: 100 },
    { new: true }
  ).select({ price: 1 });

  res.send({ Result: author, newPrice });
};

const authorName = async function (req, res) {
  let book_id = await BookModel.find({ price: { $gte: 50, $lte: 100 } }).select(
    { author_id: 1 }
  );
  let id = book_id.map((x) => x.author_id);
//   console.log(book_id)
//   console.log(id)
  let temp = [];
  for (let i = 0; i < id.length; i++) {
    let a = id[i];
    let author = await AuthorModel.find({ author_id: a }).select({
      authorName: 1,
    });
    temp.push(author);
  }
  const author_name = temp.flat();
  res.send({ Result: author_name });
};

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;

module.exports.getBooksData = getBooksData;

module.exports.updateBooks = updateBooks;
module.exports.authorName = authorName;
