import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-norma-view',
  templateUrl: './norma-view.component.html',
  styleUrls: ['./norma-view.component.css'],
})
export class NormaViewComponent implements OnInit {
  title = 'Visualizando';

  readonly actions: PoPageDynamicDetailActions = {
    back: '/',
    edit: 'norma/edit/:id',
    remove: '/',
  };

  readonly fields: Array<PoPageDynamicDetailField> = [
    { property: 'id', visible:false, key: true, divider: 'Dados da norma' },
    { property: 'codigo', label: 'Código'},
    { property: 'descricao', label: 'Descrição'}
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.title = 'Visualizando';
    });
  }
}