import { ContatoType } from "@/types/contatoType/ContatoType";

export const getDataContato = async ():Promise<ContatoType | null> => {
  const resposta = await fetch('/data/data.json')
  if(!resposta.ok) {
    throw new Error('Erro ao carregar o JSON');
  }
  const todos : ContatoType[] = await resposta.json();
  
  return todos.find(item => item.id === 5) || null;
}
