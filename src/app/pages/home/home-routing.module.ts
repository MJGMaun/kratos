import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeRegisterComponent } from './home-register/home-register.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
          { path: 'home-register', component: HomeRegisterComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
