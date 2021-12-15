const express = require("express");
const router = express.Router();
const { jokeHandler } = require("../middleware/jokeHandler.middleware");

router.get("/joke", jokeHandler);

module.exports = router;
