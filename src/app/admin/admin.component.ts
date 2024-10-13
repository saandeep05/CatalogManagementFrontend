import { Component, inject, OnInit } from '@angular/core';
import { Catalog } from '../../model/Catalog';
import { CatalogService } from '../service/catalog.service';
import { ProductService } from '../service/product.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  catalogService: CatalogService = inject(CatalogService);
  productService: ProductService = inject(ProductService);

  catalogs: Catalog[] = [];

  searchForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(new Date()),
    endDate: new FormControl(new Date())
  });

  ngOnInit(): void {
    this.fetchAllCatalogs();
  }

  fetchAllCatalogs(): void {
    this.catalogService.getCatalogs().subscribe(
      data => {
        this.catalogs = data;
        console.log(data)
      }
    );
  }

  searchCatalog(): void {
    console.log(this.searchForm.value);
    let {startDate, endDate} = this.searchForm.value;
    // if(typeof(startDate) == "string") console.log(startDate);
    // if(typeof(endDate) == "string") console.log(endDate);
    // if(typeof(endDate) != "string") console.log(new Date(new Date().toISOString().slice(0, 10)));

    this.catalogService.getSearchedCatalogs(this.searchForm).subscribe(
      data => {
        this.catalogs = data;
        console.log(data);
      }
    );
  }
}
