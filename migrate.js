require("dotenv").config();
const { migrate } = require("@useful/postgresql-js-only");
const fs = require("fs");
const path = require("path");

const fileNames = fs.readdirSync("./migrations");
console.log(fileNames);

const migrations = fileNames.map(function(fileName) {
  return fs.readFileSync(path.join(__dirname, "migrations", fileName), {
    encoding: "utf8"
  });
});

migrate(migrations);
