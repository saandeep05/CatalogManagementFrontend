import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatalogComponent } from './edit-catalog.component';

describe('EditCatalogComponent', () => {
  let component: EditCatalogComponent;
  let fixture: ComponentFixture<EditCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
