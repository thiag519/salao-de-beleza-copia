import { InformacoesType } from "./InformacoesType";
import { RedeSocialType } from "./RedeSocialType";

export interface ContatoType {
  id:number,
  titulo: string,
  mapa:string,
  redesocial: RedeSocialType[],
  informacoes:InformacoesType[]
}