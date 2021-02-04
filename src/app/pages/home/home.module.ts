import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HomeMytiComponent } from './home-myti/home-myti.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HomeRegisterComponent,
    HomeMytiComponent,
  ],
  bootstrap: []
})
export class HomeModule { }
