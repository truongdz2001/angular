import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import {ProductComponent} from './product/product.component';

import { ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'product', component: ProductComponent},
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  {path: 'product/:id/edit', component: ProductEditComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
