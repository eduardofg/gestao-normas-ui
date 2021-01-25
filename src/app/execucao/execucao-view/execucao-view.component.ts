import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Norma } from 'src/app/norma/norma';
import { NormaService } from 'src/app/norma/norma.service';
import { Processo } from 'src/app/processo/processo';
import { ProcessoService } from 'src/app/processo/processo.service';
import { Execucao } from '../execucao';
import { ExecucaoService } from '../execucao.service';
import { ItemExecucaoDto } from '../item-execucao-dto';

@Component({
  selector: 'app-execucao-view',
  templateUrl: './execucao-view.component.html',
  styleUrls: ['./execucao-view.component.css'],
})
export class ExecucaoViewComponent implements OnInit {
  
  descricao: string;
  processo: string;
  itens: Array<ItemExecucaoDto> = [];

  constructor(private execucaoService: ExecucaoService,
              private processoService: ProcessoService, 
              private normaService: NormaService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {

      this.execucaoService.findById(params.id).subscribe(
        (execucao: Execucao) => {
            this.descricao = execucao.descricao;

            this.processoService.findById(execucao.processo).subscribe(
              (processo: Processo) => {

                this.processo = processo.descricao;

                for(let item of execucao.itens) {
                  this.normaService.findById(item.norma).subscribe(
                    (norma: Norma) => {
                      this.itens.push({norma: norma.id, 
                                       codigo: norma.codigo, 
                                       descricao: norma.descricao, 
                                       aprovado: execucao.itens.find(item => item.norma == norma.id).aprovado});   
                    }
                  );
                }
             }
            );
        }
      );
    });
  }

  back() {
    this.router.navigate(['/execucao']);
  };
}