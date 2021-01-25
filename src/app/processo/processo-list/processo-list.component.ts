import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-processo-list',
  templateUrl: './processo-list.component.html',
  styleUrls: ['./processo-list.component.css'],
})
export class ProcessoListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'processo/view/:id',
    new: 'processo/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', visible:false, key: true },
    { property: 'descricao', label: 'Descrição' },
  ];
}