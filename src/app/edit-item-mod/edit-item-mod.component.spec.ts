import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModComponent } from './edit-item-mod.component';

describe('EditItemModComponent', () => {
  let component: EditItemModComponent;
  let fixture: ComponentFixture<EditItemModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
