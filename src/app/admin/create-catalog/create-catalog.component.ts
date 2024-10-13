import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CatalogService } from '../../service/catalog.service';

@Component({
  selector: 'app-create-catalog',
  templateUrl: './create-catalog.component.html',
  styleUrl: './create-catalog.component.css'
})
export class CreateCatalogComponent {
  catalogService: CatalogService = inject(CatalogService);
  
  name: String = '';
  @Output() cancel = new EventEmitter<String>();

  createCatalog(): void {
    if(this.name == '' || this.name.trim() == '') {
      alert('Catalog name must not be empty');
      return;
    }
    this.catalogService.createCatalog(this.name);
    alert('Catalog Successfully created');
  }

  handleCancel(): void {
    this.cancel.emit('');
  }
}
