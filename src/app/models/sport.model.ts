export class Sport {
  id!: number;
  name!: string;
  image!: string;
  banner!: string;
  icon!: string;
  exact_marker_points!: number;
  points_winner_loser!: number;
  tie_points!: number;
  points_lost!: number;
  participant_fee!: number;
  platform_commission!: number;
  status!: number;
  created_at!: Date;
  updated_at!: Date;
  seasons!: Season[];
  clubs!: Club[];
}

export class Season {
  id!: number;
  name!: string;
  star!: Date;
  end!: Date;
  banner!: string;
  status!: number;
  id_sport!: number;
  created_at!: Date;
  updated_at!: Date;
  working!: Working[];
}

export class Working {
  id?: number;
  name?: string;
  star?: Date;
  end?: Date;
  end_register?: Date;
  status?: number;
  id_season?: number;
  created_at?: Date;
  updated_at?: Date;
}

export class Club {
  id?: number;
  name?: string;
  acronym?: string;
  logo?: string;
  status?: number;
  created_at?: Date;
  updated_at?: Date;
  sport_id?: string;
}
