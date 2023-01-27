import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginScreenComponent} from "./shared/login-screen/login-screen.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginScreenComponent
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
          path: '',
          loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
        }
      ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
