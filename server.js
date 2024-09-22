const express = require("express");
const app = express();
require("dotenv").config();
const adminRouter = require("./routes/admin-routes");

app.use("/admin", adminRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server is running");
});
