import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExecucaoListComponent } from './execucao-list/execucao-list.component';
import { ExecucaoViewComponent } from './execucao-view/execucao-view.component';
import { ExecucaoFormComponent } from './execucao-form/execucao-form.component';

const routes: Routes = [
  { path: '', component: ExecucaoListComponent },
  { path: 'view/:id', component: ExecucaoViewComponent },
  { path: 'edit/:id', component: ExecucaoFormComponent },
  { path: 'new', component: ExecucaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecucaoRoutingModule { }
