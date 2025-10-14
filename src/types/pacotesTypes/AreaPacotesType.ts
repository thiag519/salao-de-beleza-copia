import { ProfissionalPacotesType } from "./PrifissionalPacotesType";

export interface AreaPacotesType {
  categoria: string,
  image: string;
  descricao: string,
  profissional: ProfissionalPacotesType[]
}