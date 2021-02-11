import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './layout.component';
import { HomeRegisterComponent } from './home-register/home-register.component';
import { HomeMytiComponent } from './home-myti/home-myti.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';
import { HomeMiniParallaxComponent } from './home-mini-parallax/home-mini-parallax.component';
import { HomePricingComponent } from './home-pricing/home-pricing.component';



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
    HomeFeaturesComponent,
    HomeMiniParallaxComponent,
    HomePricingComponent,
  ],
  bootstrap: []
})
export class HomeModule { }
