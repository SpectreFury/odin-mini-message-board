require("dotenv").config();

const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRoutes");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(4000, () => {
  console.log("Listening on PORT 4000");
});
