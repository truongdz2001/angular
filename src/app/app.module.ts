import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './product/product.component';

import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './product.service';

import { ProductEditComponent } from './product-edit/product-edit.component';


import { NotFoundComponent } from './not-found/not-found.component';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductAddComponent,
  
    ProductEditComponent,
   
    NotFoundComponent,
          
          HomeComponent,
                     AdminComponent,
                  
     
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
