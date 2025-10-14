import { InicioType } from "@/types/InicioType";
import { error } from "console";

export const getDataInitial = async ():Promise<InicioType | null> => {
  const resposta = await fetch('/data/data.json')
  if(!resposta.ok) {
    throw new Error('Erro ao carregar o JSON');
  }
  const todos : InicioType[] = await resposta.json();
  //const dados: InicioType = await resposta.json();
  
  return todos.find(item => item.id === 1) || null;
}
