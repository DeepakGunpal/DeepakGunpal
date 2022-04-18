const batchModel = require("../models/batchModel");

const createBatch = async function (req, res) {
  const branch = req.body;
  let branchCreate = await batchModel.create(branch);
  res.send({ data: branchCreate });
};

module.exports.createBatch = createBatch;
