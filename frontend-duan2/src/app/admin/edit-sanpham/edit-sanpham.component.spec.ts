import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSanphamComponent } from './edit-sanpham.component';

describe('EditSanphamComponent', () => {
  let component: EditSanphamComponent;
  let fixture: ComponentFixture<EditSanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
