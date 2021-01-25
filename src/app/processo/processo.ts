import { Norma } from "../norma/norma";

export interface Processo {

    id: string;
  
    descricao: string;
  
    normas: Array<string>;
  
  }