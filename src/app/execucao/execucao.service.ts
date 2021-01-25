import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Execucao } from './execucao';
import { ResponseArray } from '../utils/responseArray';

@Injectable({
  providedIn: 'root'
})
export class ExecucaoService {

  url = 'http://localhost:8080/api/v1/execucoes/';

  constructor(private http: HttpClient) { }

  inserir(body: string) {
    return this.http.post(this.url, body);
  }

  findAll() {
    return this.http.get<ResponseArray<Execucao>>(this.url);
  }

  findById(id : String) {
    return this.http.get<Execucao>(this.url + "/" + id);
  }
}
