const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const jokeRoute = require("./api/routes/joke.route");

app.use("/", jokeRoute);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("Server is running on PORT:", PORT);
});
