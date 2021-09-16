import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service';
import { TypeProduct } from '../product/product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: TypeProduct;
  constructor(
    private activedRoute: ActivatedRoute,
    private productService : ProductService 
    ) {}


  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.activedRoute.params.subscribe(params => {
      console.log('params',params);
      this.productService.get(params.id).subscribe(data => {
        console.log('data', data);
        this.product = data;
      });
    });
  }
}