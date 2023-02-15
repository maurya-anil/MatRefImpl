import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientFormComponent} from './client-form/client-form.component';
import {AboutComponent} from './about/about.component';
import {AddressComponent} from './address/address.component';
import {CustomComponentUsageComponent} from './custom-component-usage/custom-component-usage.component';
import {MasterDetailFormComponent} from './master-detail-form/master-detail-form.component';
import {AccordianDemoComponent} from './components/accordian-demo/accordian-demo.component';
import {TabularDataHostComponent} from './tabular-data-host/tabular-data-host.component';

const routes: Routes = [
  {    path:'', component:ClientFormComponent
  },
  {
    path:'client', component:ClientFormComponent
  },
  {
    path:'masterdetail', component:MasterDetailFormComponent
  },
  {
    path:'address', component:AddressComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'customcomponent', component:CustomComponentUsageComponent
  },
  {
    path:'accordian', component:AccordianDemoComponent
  },
  {
    path:'tabulardatademo', component:TabularDataHostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
