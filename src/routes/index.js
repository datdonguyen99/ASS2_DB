// const express = require("express");
// const router = express.Router();
const router = require("express-promise-router")();

router.get("/api", (req, res) => {
  res.status(200).json({
    success: "true",
    message: "do connect successfully!",
    version: "1.0.0",
  });
});

module.exports = router;
