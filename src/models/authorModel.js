const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    author_id: {
      type: Number,
      required: true,
    },
    authorName: String,
    age: Number,
    address: String,
  },
  { id: true },
  { timestamps: true }
);

module.exports = mongoose.model("author", authorSchema);
