const express = require("express");

const userRouter = express.Router();

userRouter.get("/");
userRouter.get("/:id");
userRouter.post("/signup");
userRouter.put("/:id");
userRouter.delete("/:id");
userRouter.post("/login");
userRouter.get("/bookings/:id", getBookingsOfUser);

module.exports = userRouter;
