import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productService: ProductService = inject(ProductService);
  @Input() catalogId: Number = 0;

  productForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(0),
    longDescription: new FormControl(''),
    shortDescription: new FormControl(''),
  });

  createProduct(): void {
    this.productService.createProduct(this.productForm, this.catalogId);
  }
}
