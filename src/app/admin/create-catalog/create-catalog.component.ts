import { Component, inject } from '@angular/core';
import { CatalogService } from '../../service/catalog.service';

@Component({
  selector: 'app-create-catalog',
  templateUrl: './create-catalog.component.html',
  styleUrl: './create-catalog.component.css'
})
export class CreateCatalogComponent {
  catalogService: CatalogService = inject(CatalogService);
  name: String = '';

  createCatalog(): void {
    this.catalogService.createCatalog(this.name);
  }
}
