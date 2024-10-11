import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from '../../model/Catalog';
import { FormGroup } from '@angular/forms';
import { CatalogSearchPayload } from '../../model/CatalogSearchPayload';
import { CatalogPayload } from '../../model/CatalogPayload';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  baseUrl: string = "http://localhost:8080/api/catalog";
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.getToken()
  });

  constructor(private http: HttpClient) { }

  getCatalogs(): Observable<any> {
    let options = {headers: this.headers};
    console.log(this.headers);
    console.log(options);

    return this.http.get(this.baseUrl, { headers: this.headers });
  }

  getSearchedCatalogs(form: FormGroup): Observable<Catalog[]> {
    let options = {headers: this.headers};
    let {name, activeDate, totalItems} = form.value;
    let payload: CatalogSearchPayload = new CatalogSearchPayload(name, activeDate, totalItems);

    return this.http.post<Catalog[]>(this.baseUrl + `/search/true`, payload, options);
  }

  createCatalog(name: String): void {
    let options = {headers: this.headers};
    let catalog: CatalogPayload = new CatalogPayload(name);
    
    this.http.post<Catalog>(this.baseUrl, catalog, options).subscribe();
  }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }
}
