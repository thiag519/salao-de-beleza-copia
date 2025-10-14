import { PacotesServicosType } from "./PacotesServicosType";

export interface ProfissionalPacotesType {
  id: number,
  nome: string,
  descricao: string,
  telefone: string,
  servicos: PacotesServicosType[]
}