import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { mineRouter } from './mine.router';
import { MineComponent } from './mine.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild (mineRouter)
  ],
  declarations: [
    MineComponent,
    LoginComponent
  ]
})
export class MineModule { }
