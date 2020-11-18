import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyTaikhoanKhComponent } from './quanly-taikhoan-kh.component';

describe('QuanlyTaikhoanKhComponent', () => {
  let component: QuanlyTaikhoanKhComponent;
  let fixture: ComponentFixture<QuanlyTaikhoanKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlyTaikhoanKhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyTaikhoanKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
