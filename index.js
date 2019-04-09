const express = require("express");
const cors = require("cors");

const app = express();
const port = 4000;

app.use(cors());

app.get("/", (request, response, next) => {
  response.json({ wins: "yay" });
});

app.listen(port, () =>
  console.log(`Journal server listening on port ${port}!`)
);
