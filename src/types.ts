export interface Entry {
  id: number;
  entryDate: string;
  wins: string;
  lessonsLearned: string;
  goals: string;
  morningGrateful: Array<string>;
  todaysTargets: Array<string>;
  eveningGrateful: Array<string>;
}

export interface DatabaseEntry {
  id: number;
  entry_date?: string;
  wins?: string;
  lessons_learned?: Array<string>;
  goals?: string;
  morning_grateful?: Array<string>;
  todays_targets?: Array<string>;
  evening_grateful?: Array<string>;
}

export interface DatabaseEntryQueryResult {
  rows: Array<DatabaseEntry>;
}

export interface Quote {
  quote: string;
  source?: string;
}
