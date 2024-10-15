import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { Currency } from '../../../utils/Currency';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productService: ProductService = inject(ProductService);
  @Input() catalogId: Number = 0;
  @Input() catalogName: String = '';
  @Output() cancel = new EventEmitter<String>();
  currencyList = [
    "INR",
    "USD",
    "EUR",
    "YEN",
    "AUD",
    "GBP",
    "KWD"
  ];

  productForm = new FormGroup({
    name: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(),
    currency: new FormControl("INR"),
    longDescription: new FormControl(''),
    shortDescription: new FormControl(''),
  });

  createProduct(): void {
    this.productService.createProduct(this.productForm, this.catalogId);
    alert(`${this.productForm.value.name} added to ${this.catalogName} successfully`);
  }

  handleCancel(): void {
    this.cancel.emit('');
  }
}
