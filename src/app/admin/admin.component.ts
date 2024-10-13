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
  isCatalogFormActive = false;
  isProductFormActive = false;
  catalogActiveId: Number = 0;
  catalogActiveName: String = '';

  searchForm = new FormGroup({
    name: new FormControl(''),
    startDate: new FormControl(new Date()),
    endDate: new FormControl(new Date())
  });

  ngOnInit(): void {
    this.isCatalogFormActive = false;
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

    this.catalogService.getSearchedCatalogs(this.searchForm).subscribe(
      data => {
        this.catalogs = data;
        console.log(data);
      }
    );
  }

  toggleCatalogForm(): void {
    this.isProductFormActive = false;
    this.setDefaultActiveCatalog();
    this.isCatalogFormActive = !this.isCatalogFormActive;
  }

  toggleProductForm(): void {
    this.isCatalogFormActive = false;
    this.isProductFormActive = !this.isProductFormActive;
  }

  handleAddProduct(catalogId: Number, catalogName: String): void {
    this.isCatalogFormActive = false;
    if(catalogId == this.catalogActiveId) {
      this.setDefaultActiveCatalog();
      this.toggleProductForm();
    }
    else {
      this.catalogActiveId = catalogId;
      this.catalogActiveName = catalogName;
      this.isProductFormActive = true;
    }
  }

  setDefaultActiveCatalog(): void {
    this.catalogActiveId = 0;
    this.catalogActiveName = '';
  }
}
