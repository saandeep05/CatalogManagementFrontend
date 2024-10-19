import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { Product } from '../../../model/Product';
import { Catalog } from '../../../model/Catalog';
import { getUser } from '../../../utils/getUser';
import { logout } from '../../../utils/logout';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  catalogId: Number|string = '';
  catalogName: string = '';
  products: Product[] = [];
  editEnabled: Product|null = null;
  editCatalogEnabled: Number|null = null;

  ngOnInit(): void {
    let userRole = getUser();
    if(userRole == null || userRole == 'USER') {
      alert('You are not allowed here');
      this.router.navigateByUrl('/dashboard');
    }
    let catalogId = this.route.snapshot.paramMap.get('catalogId');
    this.catalogName = <string>this.route.snapshot.paramMap.get('catalogName');
    this.catalogId = <string>catalogId;
    this.productService.getProductsByCatalogId(<String>catalogId).subscribe(
      data => {
        this.products = data;
      },
      error => {
        logout();
        alert('You are logged out');
        this.router.navigateByUrl('/');
      }
    )
  }

  handleEditProduct(product: Product): void {
    if(this.editEnabled == null) this.editEnabled = product;
    else if(this.editEnabled.id == product.id) this.editEnabled = null;
    else this.editEnabled = product;
  }

  handleEditCatalog(): void {
    if(this.editCatalogEnabled == null) this.editCatalogEnabled = <Number>this.catalogId;
    else this.editCatalogEnabled = null;
  }

  handleDelete(id: Number, index: number): void {
    this.products.splice(index, 1);
    this.productService.deleteProduct(id);
  }
}
