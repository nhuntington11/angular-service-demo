import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyLibArrayService } from './services';
import { MyLibRoutingModule } from './my-lib-router.module';
import { MyLibErrorService } from './services/my-lib-error.service';

@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    MyLibRoutingModule
  ],
  exports: [
    MyLibComponent
  ],
  providers: [
    MyLibArrayService,
    MyLibErrorService
  ]
})
export class MyLibModule { }
