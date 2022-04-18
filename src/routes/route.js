const express = require("express");
const router = express.Router();

const developerController = require("../controllers/developerController");
const batchController = require("../controllers/batchController");

const { route } = require("express/lib/application");

router.post("/createBatch", batchController.createBatch);
router.post("/createDeveloper", developerController.createDeveloper);
router.get("/scholarship", developerController.scholarshipDevelopers);
router.get("/developers", developerController.developers);

module.exports = router;
