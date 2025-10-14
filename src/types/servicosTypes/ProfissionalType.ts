import { TrabalhosType } from "./TrabalhosType";

export interface ProfissionalType {
  id : number,
  nome ?: string,
  titulo : string,
  descricao : string,
  telefone : string,
  foto :string,
  trabalhos ?: TrabalhosType[];
}