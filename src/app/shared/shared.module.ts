import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PoModule, 
    PoTemplatesModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
