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
  numberOfForms = 1;
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

  productFormList: FormGroup<{
    name: FormControl,
    category: FormControl,
    price: FormControl,
    currency: FormControl,
    longDescription: FormControl,
    shortDescription: FormControl
  }>[] = [this.productForm];

  createProduct(): void {
    this.productService.createProduct(this.productFormList, this.catalogId);
    alert(`products added to ${this.catalogName} successfully`);
    this.cancel.emit('');
  }

  addForm(): void {
    this.productFormList.push(new FormGroup({
        name: new FormControl(''),
        category: new FormControl(''),
        price: new FormControl(),
        currency: new FormControl("INR"),
        longDescription: new FormControl(''),
        shortDescription: new FormControl(''),
      })
    );
    this.numberOfForms++;
  }

  handleCancel(index: number): void {
    if(this.productFormList.length == 1) this.cancel.emit('');
    this.productFormList.splice(index, 1);
    // this.cancel.emit('');
  }
}
