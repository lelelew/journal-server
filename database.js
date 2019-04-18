const { query } = require("@useful/postgresql-js-only");

module.exports.getEntry = async date => {
  const result = await query("select * from entries where id = $1", [date]);
  return result.rows[0];
};

module.exports.getAllEntries = async () => {
  const result = await query("select * from entries");

  const mappedResult = result.rows.map(entry => ({
    goals: entry.goals,
    wins: entry.wins,
    lessonsLearned: entry.lessons_learned,
    id: entry.id
  }));
  return mappedResult;
};

module.exports.saveEntry = async entry => {
  let result;
  if (entry.id) {
    result = await query(
      "update entries set goals=$2, wins=$3, lessons_learned=$4 where id=$1",
      [entry.id, entry.goals, entry.wins, entry.lessonsLearned]
    );
  } else {
    result = await query(
      "insert into entries(goals, wins, lessons_learned) values($1, $2, $3)",
      [entry.goals, entry.wins, entry.lessonsLearned]
    );
  }

  console.log(result);
  return result;
};
