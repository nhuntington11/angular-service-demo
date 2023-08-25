import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubModuleComponent } from './sub-module.component';

@NgModule({
  declarations: [
    SubModuleComponent
  ],
  exports: [
    SubModuleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SubModule { }
