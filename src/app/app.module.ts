import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyLibModule } from 'my-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';

import { SubModule } from './sub-module/sub-module.module';
import { TextModifierComponent } from './text-modifier/text-modifier.component';
//import { LazyLoadModule } from './lazy-load/lazy-load.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
//    LazyLoadModule,
    MyLibModule,
    SubModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
