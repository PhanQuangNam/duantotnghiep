import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaikhoanNvComponent } from './add-taikhoan-nv.component';

describe('AddTaikhoanNvComponent', () => {
  let component: AddTaikhoanNvComponent;
  let fixture: ComponentFixture<AddTaikhoanNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaikhoanNvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaikhoanNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
