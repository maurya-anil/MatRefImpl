import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule, MatTable} from '@angular/material/table';

import {MaterialModules} from './material-modules';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopnavComponent } from './topnav/topnav.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { MyInputComponent } from './components/my-input/my-input.component';
import { CustomComponentUsageComponent } from './custom-component-usage/custom-component-usage.component';
import { MasterDetailFormComponent } from './master-detail-form/master-detail-form.component';
import { AccordianDemoComponent } from './components/accordian-demo/accordian-demo.component';
import { TabularDataComponent } from './components/tabular-data/tabular-data.component';
import { TabularDataHostComponent } from './tabular-data-host/tabular-data-host.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    ClientFormComponent,
    AboutComponent,
    AddressComponent,
    MyInputComponent,
    CustomComponentUsageComponent,
    MasterDetailFormComponent,
    AccordianDemoComponent,
    TabularDataComponent,
    TabularDataHostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    
    MatToolbarModule,
    MatButtonModule,

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MaterialModules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
