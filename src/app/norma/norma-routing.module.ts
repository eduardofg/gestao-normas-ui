import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormaListComponent } from './norma-list/norma-list.component';
import { NormaViewComponent } from './norma-view/norma-view.component';
import { NormaFormComponent } from './norma-form/norma-form.component';

const routes: Routes = [
  { path: '', component: NormaListComponent },
  { path: 'view/:id', component: NormaViewComponent },
  { path: 'edit/:id', component: NormaFormComponent },
  { path: 'new', component: NormaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormaRoutingModule { }
