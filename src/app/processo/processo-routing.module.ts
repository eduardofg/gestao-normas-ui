import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoListComponent } from './processo-list/processo-list.component';
import { ProcessoViewComponent } from './processo-view/processo-view.component';
import { ProcessoFormComponent } from './processo-form/processo-form.component';

const routes: Routes = [
  { path: '', component: ProcessoListComponent },
  { path: 'view/:id', component: ProcessoViewComponent },
  { path: 'edit/:id', component: ProcessoFormComponent },
  { path: 'new', component: ProcessoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessoRoutingModule { }