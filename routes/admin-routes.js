const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/signup");
adminRouter.post("/login");
adminRouter.get("/");
adminRouter.get("/:id");

module.exports = adminRouter;
