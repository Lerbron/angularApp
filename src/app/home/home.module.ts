import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouter)
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
