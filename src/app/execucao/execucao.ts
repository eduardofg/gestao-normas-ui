import { ItemExecucao } from "./item-execucao";

export interface Execucao {

    id: string;

    processo: string;
  
    descricao: string;
  
    itens: Array<ItemExecucao>;
  
  }