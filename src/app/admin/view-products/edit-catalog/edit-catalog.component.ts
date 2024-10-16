import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Catalog } from '../../../../model/Catalog';
import { CatalogService } from '../../../service/catalog.service';

@Component({
  selector: 'app-edit-catalog',
  templateUrl: './edit-catalog.component.html',
  styleUrl: './edit-catalog.component.css'
})
export class EditCatalogComponent {
  @Input() catalogId: Number|string = '';
  @Input() catalogName: string = '';
  @Output() goBack = new EventEmitter();
  name: String = '';

  constructor(private catalogService: CatalogService) {}

  ngOnChanges() {
    this.name = this.catalogName;
  }

  editCatalog(): void {
    this.catalogService.updateCatalog(<Number>this.catalogId, this.name);
    this.goBack.emit('');
  }

  handleCancel(): void {
    this.goBack.emit('');
  }
}
