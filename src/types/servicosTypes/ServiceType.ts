import { AreaServiceType } from "./AreaServiceType";

export interface ServiceType {
  id: number;
  titulo: string;
  servicos: AreaServiceType[];
  
}