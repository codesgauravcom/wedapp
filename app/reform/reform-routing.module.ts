import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReformComponent } from './reform.component';

const routes: Routes = [{ path: '', component: ReformComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReformRoutingModule { }
