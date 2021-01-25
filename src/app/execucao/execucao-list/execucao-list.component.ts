import { Component } from '@angular/core';
import {
  PoPageDynamicTableActions,
  PoPageDynamicTableField,
} from '@po-ui/ng-templates';

@Component({
  selector: 'app-execucao-list',
  templateUrl: './execucao-list.component.html',
  styleUrls: ['./execucao-list.component.css'],
})
export class ExecucaoListComponent {
  readonly actions: PoPageDynamicTableActions = {
    detail: 'execucao/view/:id',
    new: 'execucao/new',
    remove: true,
  };

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', visible: false, key: true },
    { property: 'descricao', label: 'Descrição' }
  ];
}