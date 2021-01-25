import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecucaoRoutingModule } from './execucao-routing.module';
import { ExecucaoListComponent } from './execucao-list/execucao-list.component';
import { ExecucaoViewComponent } from './execucao-view/execucao-view.component';
import { ExecucaoFormComponent } from './execucao-form/execucao-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ExecucaoListComponent, ExecucaoViewComponent, ExecucaoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ExecucaoRoutingModule
  ]
})
export class ExecucaoModule { }
