export interface UserRegister{
  name?: string;
  lastName?:string;
  docIdent?:number;
  cellPhone?:number;
  email?:string;
  password?:string;
}

export interface UserLogin{
  email?:string;
  password?:string;
}
