const express = require("express");

const bookingsRouter = express.Router();

bookingsRouter.get("/:id");
bookingsRouter.post("/");
bookingsRouter.delete("/delete/:id");

module.exports = bookingsRouter;
