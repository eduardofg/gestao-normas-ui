import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import {
  PoPageDynamicEditActions,
  PoPageDynamicEditField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-norma-form',
  templateUrl: './norma-form.component.html',
  styleUrls: ['./norma-form.component.css'],
})
export class NormaFormComponent implements OnInit {
  title = 'Nova norma';

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/norma',
    save: '/norma',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
    { label: 'Código', property: 'codigo', divider: 'Dados da norma' },
    { label: 'Descrição', property: 'descricao' }
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = params.id ? 'Editando' : 'Nova norma';
    });
  }
}

