import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'norma',
    loadChildren: () => import('../app/norma/norma.module').then(m => m.NormaModule)
  },
  {
    path: 'processo',
    loadChildren: () => import('../app/processo/processo.module').then(m => m.ProcessoModule)
  },
  {
    path: 'execucao',
    loadChildren: () => import('../app/execucao/execucao.module').then(m => m.ExecucaoModule)
  },
  { path: '', redirectTo: '/norma', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
