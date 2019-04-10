const { query } = require("@useful/postgresql-js-only");

module.exports.getEntry = async date => {
  const result = await query("select * from entries where id = $1", [date]);
  return result.rows[0];
};
