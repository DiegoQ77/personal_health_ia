export type Feeling = "good" | "bad" | "cloudy";

export interface AlimentationENtry {
  id: number;
  date: string;
  weather: Feeling;
  comment: string;
}
