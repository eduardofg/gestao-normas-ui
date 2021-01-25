import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Norma } from 'src/app/norma/norma';

import { NormaService } from 'src/app/norma/norma.service';
import { Processo } from '../processo';
import { ProcessoService } from "../processo.service";

@Component({
  selector: 'app-processo-view',
  templateUrl: './processo-view.component.html',
  styleUrls: ['./processo-view.component.css'],
})
export class ProcessoViewComponent implements OnInit {
  
  descricao: string;
  normas: Array<Norma> = [];

  constructor(private processoService: ProcessoService, 
              private normaService: NormaService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      this.processoService.findById(params.id).subscribe(
        (processo: Processo) => {
            this.descricao = processo.descricao;

            for(let norma of processo.normas) {
              this.normaService.findById(norma).subscribe(
                (norma: Norma) => {
                   this.normas.push(norma);
                }
              );
            }
        }
      );
    });
  }

  back() {
    this.router.navigate(['/processo']);
  };
}