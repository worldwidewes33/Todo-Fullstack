const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const todoRoutes = require("./routes/todoRoutes");

dotenv.config({ path: "./config.env" });

const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
