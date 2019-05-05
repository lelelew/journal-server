import express from "express";
import cors from "cors";
import { getEntry, saveEntry, getAllEntries } from "./database";
import { newQuote } from "./quotes";
import { Entry, Quote } from "./types";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/entry", async (request, response, next) => {
  const date: string = request.query.date;
  const entry: Entry = await getEntry(date);
  response.json(entry);
});

app.get("/entries", async (request, response, next) => {
  const entries = await getAllEntries();
  response.json(entries);
});

app.get("/quote", (request, response, next) => {
  const quote: Quote = newQuote();
  response.json({ quote });
});

app.post("/entries/new", async (request, response, next) => {
  const entry: Entry = request.body;
  console.log(entry);
  saveEntry(entry);
  setTimeout(function() {
    response.json(entry);
  }, 1000);
});

app.listen(port, () =>
  console.log(`Journal server listening on port ${port}!`)
);
