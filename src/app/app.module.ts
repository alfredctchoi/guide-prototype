import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { InterstitialComponent } from './interstitial/interstitial.component';
import { LoginComponent } from './login/login.component';
import { BiDrectionNavComponent } from './bi-drection-nav/bi-drection-nav.component';

const appRoutes: Routes = [{
  path: 'interstitial',
  component: InterstitialComponent
}, {
  path: 'login',
  component: LoginComponent
},{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}];

@NgModule({
  declarations: [
    AppComponent,
    InterstitialComponent,
    LoginComponent,
    BiDrectionNavComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
