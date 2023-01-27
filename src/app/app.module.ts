import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { LoginScreenComponent } from './shared/login-screen/login-screen.component';
import {TokenInterceptor} from "./interceptors/token.interceptor";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PaginatorComponent,
    LoginScreenComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})
export class AppModule { }
