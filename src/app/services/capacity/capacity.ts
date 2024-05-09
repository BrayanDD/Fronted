import { Technology } from "../technology/technology";

export interface Capacity{
  id:number;
  name:string;
  description:string;
  technologies:Technology[];
}
