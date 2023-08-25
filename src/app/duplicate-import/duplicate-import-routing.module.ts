import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DuplicateImportComponent } from './duplicate-import.component';

const routes: Routes = [
  { 'path': '', component: DuplicateImportComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DuplicateImportRoutingModule {}