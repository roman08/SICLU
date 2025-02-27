export class Authorization {
  id!: number;
  user_id!: number;
  journey_id!: number;
  authorize!: number;
  created_at!: null;
  updated_at!: null;
  jornada!: Jornada;
  usuario!: Usuario;
}

export class Jornada {
  id!: number;
  name!: string;
  star!: Date;
  end!: Date;
  end_register!: Date;
  status!: number;
  id_season!: number;
  created_at!: Date;
  updated_at!: Date;
}

export class Usuario {
  id!: number;
  name!: string;
  last_name!: string;
  second_surname!: string;
  birth_date!: Date;
  phone!: string;
  profile_img!: string;
  email!: string;
  password!: string;
  bank_id!: number;
  bank_account!: string;
  account_type_id!: number;
  observations!: string;
  created_at!: Date;
  updated_at!: Date;
}
