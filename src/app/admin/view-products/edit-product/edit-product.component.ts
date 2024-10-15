import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../model/Product';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
  constructor(private productService: ProductService) {}

  @Input() product: Product|null = null;
  @Output() cancel = new EventEmitter<Product>();
  currencyList = [
    "INR",
    "USD",
    "EUR",
    "YEN",
    "AUD",
    "GBP",
    "KWD"
  ]

  ngOnChanges() {
    this.productEditForm = new FormGroup({
      name: new FormControl(this.product?.name),
      category: new FormControl(this.product?.category),
      price: new FormControl(this.product?.price),
      currency: new FormControl(this.product?.currency),
      shortDescription: new FormControl(this.product?.shortDescription),
      longDescription: new FormControl(this.product?.longDescription)
    });
  }

  productEditForm = new FormGroup({
    name: new FormControl(this.product?.name),
    category: new FormControl(this.product?.category),
    price: new FormControl(this.product?.price),
    currency: new FormControl(this.product?.currency),
    shortDescription: new FormControl(this.product?.shortDescription),
    longDescription: new FormControl(this.product?.longDescription)
  });

  updateProduct(): void {
    this.productService.updateProduct(<Number>this.product?.id, this.productEditForm);
  }

  handleCancel(): void {
    this.cancel.emit(<Product>this.product);
  }

}
