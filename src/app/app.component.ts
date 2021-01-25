import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly menus: Array<PoMenuItem> = [
    { label: 'Normas', link: '/norma' },
    { label: 'Processos de Auditoria', link: '/processo' },
    { label: 'Execução do Processos de Auditoria', link: '/execucao' }
  ];
}