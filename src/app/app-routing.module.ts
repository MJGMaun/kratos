import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_helpers';
import { Role } from './_models';

const homeModule = () => import('./pages/home/home.module').then(x => x.HomeModule);
const accountModule = () => import('./pages/account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./pages/admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./pages/profile/profile.module').then(x => x.ProfileModule);
const userModule = () => import('./pages/user/user.module').then(x => x.UserModule);

const routes: Routes = [
    { path: '', loadChildren: homeModule},
    { path: '', loadChildren: accountModule },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
    { path: 'user', loadChildren: userModule, canActivate: [AuthGuard], data: { roles: [Role.User] } },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
