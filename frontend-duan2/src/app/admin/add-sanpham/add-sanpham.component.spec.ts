import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSanphamComponent } from './add-sanpham.component';

describe('AddSanphamComponent', () => {
  let component: AddSanphamComponent;
  let fixture: ComponentFixture<AddSanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
