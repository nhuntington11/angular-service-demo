import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLibComponent } from './my-lib.component';

const routes: Routes = [
  { 'path': '', component: MyLibComponent }
  //{ 'path': 'mylib', component: MyLibComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyLibRoutingModule {}