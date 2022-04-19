const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/middlewares");

const controller = require("../controllers/controller");

const { route } = require("express/lib/application");

router.post("/createBatch", controller.createBatch);
router.get(
  "/getBatch",
  middleware.mid1,
  middleware.mid2,
  middleware.mid3,
  controller.getBatch
); 

module.exports = router;
