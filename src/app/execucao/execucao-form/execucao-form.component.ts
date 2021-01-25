import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ExecucaoService } from "../../execucao/execucao.service";
import { ProcessoService } from "../../processo/processo.service";
import { NormaService } from "../../norma/norma.service";
import { PoNotificationService, PoMultiselectOption, PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { ResponseArray } from 'src/app/utils/responseArray';
import { Norma } from 'src/app/norma/norma';

import { ActivatedRoute } from '@angular/router';

import { Processo } from 'src/app/processo/processo';
import { ItemExecucaoDto } from '../item-execucao-dto';

@Component({
  selector: 'app-execucao-form',
  templateUrl: './execucao-form.component.html',
  styleUrls: ['./execucao-form.component.css'],
})
export class ExecucaoFormComponent implements OnInit {
 
  reactiveForm = new FormGroup ({ descricao: new FormControl(), processo: new FormControl()});
  columns: Array<PoTableColumn> = [{ property: 'codigo', label: 'Código' },
                                   { property: 'descricao', label: 'Descrição' },
                                   { property: 'aprovado', label: 'Aprovado?', type:"boolean"}]; 

  processos: Array<PoMultiselectOption> = [];
  itens: Array<ItemExecucaoDto> = [];

  constructor(private formBuilder: FormBuilder, 
    private execucaoService: ExecucaoService,
    private processoService: ProcessoService, 
    private normaService: NormaService, 
    private poNotification: PoNotificationService,
    private router: Router) {
    this.createReactiveForm();
  }

  ngOnInit(): void {
    this.processoService.findAll().subscribe(
      (processos: ResponseArray<Processo>) => {
        for(let processo of processos.items) {
          this.processos.push({value: processo.id, label: processo.descricao});
        }
      }
    );
  }

  createReactiveForm() {
    this.reactiveForm = this.formBuilder.group({
      descricao: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],
      processo: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  save() {
    let payload = this.reactiveForm.value;
    payload["itens"] = this.itens;

    console.log(payload)
    this.execucaoService.inserir(payload).subscribe(
      () => {
        this.poNotification.success("Execução do processo de auditoria inserido com Sucesso");
        this.cancel();
      }
    );
  }

  cancel() {
    this.router.navigate(['/execucao']);
  }

  changeEvent() {

    this.itens = [];
    this.processoService.findById(this.reactiveForm.value.processo).subscribe(
      (processo: Processo) => {
        for(let norma of processo.normas) {
          this.normaService.findById(norma).subscribe(
            (norma: Norma) => {
                this.itens.push({norma: norma.id, codigo: norma.codigo, descricao: norma.descricao, aprovado: false});   
            }
          );
        }
      }
    );
  }

  selectedEvent(row: any) {
     this.itens.find(item => item.norma == row.norma).aprovado = true;
  }

  unselectedEvent(row: any) {
     this.itens.find(item => item.norma == row.norma).aprovado = false;
 }
}
