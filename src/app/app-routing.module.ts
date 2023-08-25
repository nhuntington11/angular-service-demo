import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { TextModifierComponent } from './text-modifier/text-modifier.component';

const routes: Routes = [
  { 'path': '', redirectTo: 'home', pathMatch: 'full' },
  { 'path': 'home', component: HomeComponent },
  { 'path': 'textmodifier', component: TextModifierComponent },
  { 
    'path': 'lazymodule',
    loadChildren: () => import('./lazy-load/lazy-load.module').then(m => m.LazyLoadModule)
  },
  {
    'path': 'duplicate',
    loadChildren: () => import('./duplicate-import/duplicate-import.module').then(m => m.DuplicateImportModule)
  },
  {
    'path': 'mylib',
    loadChildren: () => import('my-lib').then(m => m.MyLibModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
