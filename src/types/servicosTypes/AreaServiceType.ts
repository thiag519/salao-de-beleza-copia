import { ProfissionalType } from "./ProfissionalType";
import { InstagramType } from "./InstagramType";

export interface AreaServiceType {
  categoria: string;
  image: string;
  nome?: string;
  instagram:InstagramType;
  descricao: string;
  profissional: ProfissionalType[];
}

