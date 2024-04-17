const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
