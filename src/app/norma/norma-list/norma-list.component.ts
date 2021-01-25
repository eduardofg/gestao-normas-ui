import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-norma-list',
  templateUrl: './norma-list.component.html',
  styleUrls: ['./norma-list.component.css'],
})
export class NormaListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'norma/view/:id',
    edit: 'norma/edit/:id',
    new: 'norma/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'codigo', label: 'Código' },
    { property: 'descricao', label: 'Descrição' },
  ];
}
