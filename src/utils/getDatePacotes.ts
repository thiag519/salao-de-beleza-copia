import {PacotesType } from "@/types/pacotesTypes/PacotesType";

export const getDataPacotes = async ():Promise<PacotesType| null> => {
  const resposta = await fetch('/data/data.json')
  if(!resposta.ok) {
    throw new Error('Erro ao carregar o JSON');
  }
  const todos : PacotesType[] = await resposta.json();
  return todos.find(item => item.id === 4) || null;
}
