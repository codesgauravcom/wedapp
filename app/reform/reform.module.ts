import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReformRoutingModule } from './reform-routing.module';
import { ReformComponent } from './reform.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReformComponent
  ],
  imports: [
    CommonModule,
    ReformRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ReformModule { }
