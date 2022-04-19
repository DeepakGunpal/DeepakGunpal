const batchModel = require("../models/batchModel");
const createBatch = async function (req, res) {
  const branch = req.body;
  let branchCreate = await batchModel.create(branch);
  res.send({ data: branchCreate });
};

const getBatch = async function (req, res) {
  let branch = await batchModel.find();
  res.send({ data: branch });
};

module.exports.createBatch = createBatch;
module.exports.getBatch = getBatch;
