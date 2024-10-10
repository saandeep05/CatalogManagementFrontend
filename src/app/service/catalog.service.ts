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
    'Authorization': 'Bearer ' + this.getToken()
  })

  constructor(private http: HttpClient) { }

  getCatalogs(): Observable<Catalog[]> {
    let options = {headers: this.headers};
    return this.http.get<Catalog[]>(this.baseUrl, options);
  }

  getSearchedCatalogs(form: FormGroup): Observable<Catalog[]> {
    let options = {headers: this.headers};
    let {name, activeDate, totalItems} = form.value;
    let paylod: CatalogSearchPayload = new CatalogSearchPayload(name, activeDate, totalItems);

    return this.http.post<Catalog[]>(this.baseUrl + `/search/false`, paylod, options);
  }

  createCatalog(catalog: CatalogPayload): void {
    let options = {headers: this.headers};
    this.http.post<Catalog>(this.baseUrl, catalog, options).subscribe();
  }

  getToken(): string {
    return <string>localStorage.getItem('token');
  }
}
