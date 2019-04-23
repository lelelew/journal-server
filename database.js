const { query } = require("@useful/postgresql-js-only");

module.exports.getEntry = async date => {
  const result = await query("select * from entries where id = $1", [date]);
  return result.rows[0];
};

module.exports.getAllEntries = async () => {
  const result = await query("select * from entries");

  console.log(result.rows);

  const mappedResult = result.rows.map(entry => ({
    goals: entry.goals,
    wins: entry.wins,
    lessonsLearned: entry.lessons_learned,
    morningGrateful: entry.morning_grateful ? entry.morning_grateful : [],
    todaysTargets: entry.todays_targets ? entry.todays_targets : [],
    eveningGrateful: entry.evening_grateful ? entry.evening_grateful : [],

    id: entry.id
  }));
  return mappedResult;
};

module.exports.saveEntry = async entry => {
  let result;
  if (entry.id) {
    result = await query(
      "update entries set goals=$2, wins=$3, lessons_learned=$4, morning_grateful=$5, todays_targets=$6, evening_grateful=$7 where id=$1",
      [
        entry.id,
        entry.goals,
        entry.wins,
        entry.lessonsLearned,
        JSON.stringify(entry.morningGrateful),
        JSON.stringify(entry.todaysTargets),
        JSON.stringify(entry.eveningGrateful)
      ]
    );
  } else {
    result = await query(
      "insert into entries(goals, wins, lessons_learned, morning_grateful, todays_targets, evening_grateful) values($1, $2, $3, $4, $5, $6)",
      [
        entry.goals,
        entry.wins,
        entry.lessonsLearned,
        JSON.stringify(entry.morningGrateful),
        JSON.stringify(entry.todaysTargets),
        JSON.stringify(entry.eveningGrateful)
      ]
    );
  }

  console.log(result);
  return result;
};
