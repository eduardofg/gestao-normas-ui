import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessoRoutingModule } from './processo-routing.module';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoViewComponent } from './processo-view/processo-view.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProcessoListComponent, ProcessoViewComponent, ProcessoFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProcessoRoutingModule
  ]
})
export class ProcessoModule { }
