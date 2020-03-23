export type StatsModel = {
  cases: number;
  deaths: number;
  recovered: number;
};

export type CountryModel = {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  [key: string]: string | number;
};

export type ErrorModel = object | null;
