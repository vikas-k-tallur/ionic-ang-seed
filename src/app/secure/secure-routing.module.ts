import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecurePage } from './secure.page';
import { SecureGuard } from '../guards/secure.guard';
import { UserDataResolver } from '../data-resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'secure',
    component: SecurePage,
    canActivate:[SecureGuard],
    resolve:{
      userData:UserDataResolver
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurePageRoutingModule { }
