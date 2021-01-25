import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormaRoutingModule } from './norma-routing.module';
import { NormaListComponent } from './norma-list/norma-list.component';
import { NormaViewComponent } from './norma-view/norma-view.component';
import { NormaFormComponent } from './norma-form/norma-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NormaListComponent, NormaViewComponent, NormaFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    NormaRoutingModule
  ]
})
export class NormaModule { }
