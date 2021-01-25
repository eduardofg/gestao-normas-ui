import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseArray } from '../utils/responseArray';
import { Norma } from './norma';

@Injectable({
  providedIn: 'root'
})
export class NormaService {

  url = 'http://localhost:8080/api/v1/normas/';

  constructor(private http: HttpClient) { }

  inserir(body: string) {
    return this.http.post(this.url, body);
  }

  findAll() {
    return this.http.get<ResponseArray<Norma>>(this.url);
  }

  findById(id : String) {
    return this.http.get<Norma>(this.url + "/" + id);
  }
}
