const { Pool } = require("pg");
const postgres = require("./postgres.json");
const pool = new Pool(postgres);

pool.connect();

module.exports.getEntry = async date => {
  const result = await pool.query("select * from entries where id = $1", [
    date
  ]);
  return result.rows[0];
};
