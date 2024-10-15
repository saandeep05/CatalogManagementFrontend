import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../model/Product';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  catalogId: string|Number = '';
  products: Product[] = [];
  editEnabled: Product|null = null;

  ngOnInit(): void {
    let catalogId = this.route.snapshot.paramMap.get('catalogId');
    this.catalogId = <string>catalogId;
    this.productService.getProductsByCatalogId(<String>catalogId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleEditProduct(product: Product): void {
    if(this.editEnabled == null) this.editEnabled = product;
    else if(this.editEnabled.id == product.id) this.editEnabled = null;
    else this.editEnabled = product;
  }
}
