import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-requester',
  templateUrl: './requester.component.html',
  styleUrl: './requester.component.css'
})
export class RequesterComponent implements OnInit {
  productService: ProductService = inject(ProductService);

  products: Product[] = [];
  searchWord: string = '';

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  fetchAllProducts(): void {
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(data)
        data.forEach(product => console.log(product.id))
      }
    );
  }

  handleMiscSearch(event: any): void {
    if(this.searchWord == '') {
      this.fetchAllProducts();
    }
    if(event.keyCode == 13) {
      this.handleSearch();
    }
  }

  handleSearch(): void {
    this.productService.getSearchedProducts(this.searchWord).subscribe(
      data => {
        this.products = data;
      }
    );
  }
}
