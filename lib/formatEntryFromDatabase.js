const dayjs = require("dayjs");

module.exports = formatEntryFromDatabase = entry => ({
  goals: entry.goals,
  wins: entry.wins,
  lessonsLearned: entry.lessons_learned,
  morningGrateful: entry.morning_grateful ? entry.morning_grateful : [],
  todaysTargets: entry.todays_targets ? entry.todays_targets : [],
  eveningGrateful: entry.evening_grateful ? entry.evening_grateful : [],
  entryDate: dayjs(entry.entry_date).format("YYYY-MM-DD"),
  id: entry.id
});
