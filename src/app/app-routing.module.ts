import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { IphoneComponent } from './iphone/iphone.component';
import { RealmeComponent } from './realme/realme.component';
import { OutfitComponent } from './outfit/outfit.component';
import { IphoneMaxComponent } from './iphone-max/iphone-max.component';
import { Iphone15Component } from './iphone-15/iphone-15.component';
import { IphoneProComponent } from './iphone-pro/iphone-pro.component';
import { CartComponent } from './cart/cart.component';
import { BuynowComponent } from './buynow/buynow.component';

const routes: Routes = [
  { path:'sign', component: SignComponent},
  { path:'menu', component: MenuComponent},
  {path:'app',component:AppComponent},
  {path:'iphone',component:IphoneComponent},
  {path:'realme',component:RealmeComponent},
  {path:'outfit',component:OutfitComponent},
  {path:'iphone-max',component:IphoneMaxComponent},
  {path:'iphone-pro',component:IphoneProComponent},
  {path:'iphone-15',component:Iphone15Component},
  {path:'cart',component:CartComponent},
  {path:'buy',component:BuynowComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
