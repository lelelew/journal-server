const express = require("express");
const cors = require("cors");
const { getEntry } = require("./database.js");

const app = express();
const port = 4000;

app.use(cors());

app.get("/", async (request, response, next) => {
  const date = request.query.date;
  const entry = await getEntry(date);
  response.json(entry);
});

app.listen(port, () =>
  console.log(`Journal server listening on port ${port}!`)
);
