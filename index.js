require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getEntry, saveEntry, getAllEntries } = require("./database.js");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", async (request, response, next) => {
  const date = request.query.date;
  const entry = await getEntry(date);
  response.json(entry);
});

app.get("/entries", async (request, response, next) => {
  const entries = await getAllEntries();
  response.json(entries);
});

app.post("/entries/new", async (request, response, next) => {
  const entry = request.body;
  console.log(entry);
  saveEntry(entry);
  response.json(entry);
});

app.listen(port, () =>
  console.log(`Journal server listening on port ${port}!`)
);
