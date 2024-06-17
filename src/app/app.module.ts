import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignComponent } from './sign/sign.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DisplayComponent } from './display/display.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { IphoneComponent } from './iphone/iphone.component';
import { RealmeComponent } from './realme/realme.component';

import { IphoneMaxComponent } from './iphone-max/iphone-max.component';
import { IphoneProComponent } from './iphone-pro/iphone-pro.component';
import { Iphone15Component } from './iphone-15/iphone-15.component';
import { CartComponent } from './cart/cart.component';
import { RealmeNazoComponent } from './realme-nazo/realme-nazo.component';
import { OutfitComponent } from './outfit/outfit.component';
import { IgxCarouselModule,IgxSliderModule} from "igniteui-angular";
import { BuynowComponent } from './buynow/buynow.component';



@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    MenuComponent,
    DisplayComponent,
    IphoneComponent,
    RealmeComponent,
    
    IphoneMaxComponent,
    IphoneProComponent,
    Iphone15Component,
    CartComponent,
    RealmeNazoComponent,
    OutfitComponent,
    BuynowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule,MatButtonModule,MatToolbarModule,ReactiveFormsModule,MatSidenavModule,
    MatExpansionModule,FormsModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatListModule,MatCardModule,
    IgxCarouselModule,IgxSliderModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
