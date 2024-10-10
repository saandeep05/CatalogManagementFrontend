import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../model/Product';
import { Observable } from 'rxjs';

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

    return this.http.get<Product[]>(this.baseUrl, options);
  }

  getSearchedProducts(searchWord: string): Observable<Product[]> {
    let options = {headers: this.headers};
    console.log(options);

    return this.http.get<Product[]>(this.baseUrl+`/search/${searchWord}`, options);
  }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }
}
