import { AboutType } from "@/types/AboutType";

export const getDataAbout = async ():Promise<AboutType | null> => {
  const resposta = await fetch('/data/data.json')
  if(!resposta.ok) {
    throw new Error('Erro ao carregar o JSON');
  }
  const todos : AboutType[] = await resposta.json();
  //const dados: InicioType = await resposta.json();
  
  return todos.find(item => item.id === 2) || null;
}
