import { Component, VERSION  } from '@angular/core';
import { TypeProduct } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: TypeProduct[] = [
];
  
  addItem(product: any){
    this.products.push(product);
    console.log(this.products);
    //this.item = product

  }
  
}
