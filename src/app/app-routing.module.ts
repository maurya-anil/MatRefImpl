import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientFormComponent} from './client-form/client-form.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {    path:'', component:ClientFormComponent
  },
  {
    path:'client', component:ClientFormComponent
  },
  {
    path:'about', component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
