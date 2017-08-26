import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { DynamicComponent } from './dynamic.component';
import { DynamicDetailComponent } from '../dynamic-detail/dynamic-detail.component';

import { dynamicRouter} from './dynamic.router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dynamicRouter)

  ],
  declarations: [
    DynamicComponent,
    DynamicDetailComponent
  ]
})
export class DynamicModule { }
