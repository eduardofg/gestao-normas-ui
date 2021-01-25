import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ProcessoService } from "../processo.service";
import { NormaService } from "../../norma/norma.service";
import { PoNotificationService, PoMultiselectOption } from '@po-ui/ng-components';
import { ResponseArray } from 'src/app/utils/responseArray';
import { Norma } from 'src/app/norma/norma';


@Component({
  selector: 'app-processo-form',
  templateUrl: './processo-form.component.html',
  styleUrls: ['./processo-form.component.css'],
})

export class ProcessoFormComponent implements OnInit{

  reactiveForm = new FormGroup ({ descricao: new FormControl(), normas: new FormControl()});

  options: Array<PoMultiselectOption> = [];

  constructor(private formBuilder: FormBuilder, 
    private processoService: ProcessoService, 
    private normaService: NormaService, 
    private poNotification: PoNotificationService,
    private router: Router) {
    this.createReactiveForm();
  }

  ngOnInit(): void {
    this.normaService.findAll().subscribe(
      (normas: ResponseArray<Norma>) => {
        for(let norma of normas.items) {
          this.options.push({value: norma.id, label: norma.codigo});
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
      normas: [
        "",
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  save() {
    this.processoService.inserir(this.reactiveForm.value).subscribe(
      () => {
        this.poNotification.success("Processo de Auditoria inserido com Sucesso");
        this.cancel();
      }
    );
  }

  cancel() {
    this.router.navigate(['/processo']);
  }
}
