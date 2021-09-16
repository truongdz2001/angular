import {Injectable, Type} from '@angular/core';
import { TypeProduct } from './product/product';  
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

 @Injectable ()
 export class   ProductService {
     //products: TypeProduct[] = products;
     API: string = 'https://5e79b4b817314d00161333da.mockapi.io/product';
     constructor(private http: HttpClient) {}
     getProducts(): Observable<TypeProduct[]> {
       return this.http.get<TypeProduct[]>(this.API)
      // return this.products;
     }
     get(id: any): Observable<TypeProduct>{
       return this.http.get<TypeProduct>(`${this.API}/${id}`);
     }
     onAddProduct(item: TypeProduct): Observable<TypeProduct>{
       return this.http.post<TypeProduct>(this.API, item);
      //this.products.push(item);
      //console.log(this.products);
      //this.item = product;
     }
     removeProduct(id: number): Observable<TypeProduct>{
       return this.http.delete<TypeProduct>(`${this.API}/${id}`);
     }
     updateProduct(item: TypeProduct): Observable<TypeProduct>{
      return this.http.put<TypeProduct>(`${this.API}/${item.id}`, item);
     }


     
 }
