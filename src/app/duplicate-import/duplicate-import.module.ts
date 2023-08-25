import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyLibModule } from 'my-lib';

import { DuplicateImportComponent } from './duplicate-import.component';
import { DuplicateImportRoutingModule } from './duplicate-import-routing.module';

@NgModule({
  declarations: [
    DuplicateImportComponent
  ],
  imports: [
    CommonModule,
    DuplicateImportRoutingModule,
    MyLibModule
  ]
})
export class DuplicateImportModule { }
