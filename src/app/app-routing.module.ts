import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientFormComponent} from './client-form/client-form.component';
import {AboutComponent} from './about/about.component';
import {AddressComponent} from './address/address.component';

const routes: Routes = [
  {    path:'', component:ClientFormComponent
  },
  {
    path:'client', component:ClientFormComponent
  },
  {
    path:'address', component:AddressComponent
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
