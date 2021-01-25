import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseArray } from '../utils/responseArray';
import { Processo } from './processo';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  url = 'http://localhost:8080/api/v1/processos/';

  constructor(private http: HttpClient) { }

  inserir(body: string) {
    return this.http.post(this.url, body);
  }

  findAll() {
    return this.http.get<ResponseArray<Processo>>(this.url);
  }

  findById(id : String) {
    return this.http.get<Processo>(this.url + "/" + id);
  }
}
