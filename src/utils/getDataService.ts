import { ServiceType } from "@/types/servicosTypes/ServiceType";

export const getDataService = async ():Promise<ServiceType | null> => {
  const resposta = await fetch('/data/data.json')
  if(!resposta.ok) {
    throw new Error('Erro ao carregar o JSON');
  }
  const todos : ServiceType[] = await resposta.json();
  return todos.find(item => item.id === 3) || null;
}
