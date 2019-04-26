const { query } = require("@useful/postgresql-js-only");
const dayjs = require("dayjs");
const formatEntryFromDatabase = require("./lib/formatEntryFromDatabase.js");

module.exports.getEntry = async date => {
  const result = await query("select * from entries where entry_date = $1", [
    date
  ]);
  return formatEntryFromDatabase(result.rows[0]);
};

module.exports.getAllEntries = async () => {
  const result = await query("select * from entries");

  console.log(result.rows);

  const mappedResult = result.rows.map(formatEntryFromDatabase);
  return mappedResult;
};

module.exports.saveEntry = async entry => {
  let result;
  console.log(entry);
  if (entry.id) {
    result = await query(
      "update entries set goals=$2, wins=$3, lessons_learned=$4, morning_grateful=$5, todays_targets=$6, evening_grateful=$7, entry_date=$8 where id=$1",
      [
        entry.id,
        entry.goals,
        entry.wins,
        entry.lessonsLearned,
        JSON.stringify(entry.morningGrateful),
        JSON.stringify(entry.todaysTargets),
        JSON.stringify(entry.eveningGrateful),
        entry.entryDate
      ]
    );
  } else {
    result = await query(
      "insert into entries(goals, wins, lessons_learned, morning_grateful, todays_targets, evening_grateful, entry_date) values($1, $2, $3, $4, $5, $6, $7)",
      [
        entry.goals,
        entry.wins,
        entry.lessonsLearned,
        JSON.stringify(entry.morningGrateful),
        JSON.stringify(entry.todaysTargets),
        JSON.stringify(entry.eveningGrateful),
        entry.entryDate
      ]
    );
  }

  console.log(result);
  return result;
};
