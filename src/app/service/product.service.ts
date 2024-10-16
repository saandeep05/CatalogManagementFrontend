import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ProductPayload } from '../../model/ProductPayload';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string = "http://localhost:8080/api/product";
  headers = new HttpHeaders({
    'Authorization': 'Bearer ' + this.getToken(),
  });

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    let options = {headers: this.headers};
    console.log(options);

    return this.http.get<Product[]>(this.baseUrl+'?deleted=false', options);
  }

  getSearchedProducts(searchWord: string): Observable<Product[]> {
    let options = {headers: this.headers};
    console.log(options);

    return this.http.get<Product[]>(this.baseUrl+`/search/${searchWord}`, options);
  }

  createProduct(forms: FormGroup[], catalogId: Number): void {
    let options = {headers: this.headers};
    let payload: ProductPayload[] = [];
    forms.forEach((form) => {
        let {name, category, price, currency, longDescription, shortDescription} = form.value;
        payload.push({
          name,
          category,
          price,
          currency,
          longDescription,
          shortDescription
        });
      })

    this.http.post(this.baseUrl + `/${catalogId}`, payload, options).subscribe();
  }

  getProductsByCatalogId(catalodId: String): Observable<Product[]> {
    let options = {headers: this.headers};
    return this.http.get<Product[]>(this.baseUrl+`/${catalodId}`, options);
  }

  updateProduct(id: Number, form: FormGroup) {
    let options = {headers: this.headers};
    let {name, category, price, currency, longDescription, shortDescription} = form.value;
    let payload: ProductPayload = {
      name,
      category,
      price,
      currency,
      longDescription,
      shortDescription,
    };
    this.http.put(this.baseUrl+`/${id}`, payload, options).subscribe();
  }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }
}
