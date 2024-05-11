import { Capacity } from "../capacity/capacity";

export interface Bootcamp{
  id:number;
  name:string;
  description:string;
  capacities: Capacity[];
}
