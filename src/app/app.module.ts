import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomedetailComponent } from './homedetail/homedetail.component'

import { appRouters } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HomedetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
