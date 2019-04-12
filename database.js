const { query } = require("@useful/postgresql-js-only");

module.exports.getEntry = async date => {
  const result = await query("select * from entries where id = $1", [date]);
  return result.rows[0];
};

module.exports.getAllEntries = async () => {
  const result = await query("select * from entries");
  return result.rows;
};

module.exports.saveEntry = async entry => {
  const result = await query(
    "insert into entries(wins, lessons_learned) values($1, $2)",
    [entry.wins, entry.lessonsLearned]
  );
  console.log(result);
  return result;
};
