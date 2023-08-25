import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadArrayService } from './lazy-load-array.service';
import { LazyLoadComponent } from './lazy-load.component';
import { LazyLoadRoutingModule } from './lazy-load-routing.module';

@NgModule({
  declarations: [
    LazyLoadComponent
  ],
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ],
  providers: [
    LazyLoadArrayService
  ]
})
export class LazyLoadModule {}
