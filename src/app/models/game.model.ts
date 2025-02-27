export class Game {
  id!: number;
  star_date!: Date;
  hour!: string;
  id_local_team!: number;
  local_mummy!: number;
  id_visiting_team!: number;
  visiting_mumy!: number;
  observation!: string;
  id_working!: number;
  status!: number;
  local_team!: Team;
  visiting_team!: Team;
  local_marker!: number;
  visiting_marker!: number;
}

export class Team {
  id!: number;
  name!: string;
  acronym!: string;
  logo!: string;
  status!: number;
  sport_id!: string;
}
