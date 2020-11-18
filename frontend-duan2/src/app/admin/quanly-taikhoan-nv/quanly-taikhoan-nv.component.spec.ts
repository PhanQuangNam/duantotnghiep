import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyTaikhoanNvComponent } from './quanly-taikhoan-nv.component';

describe('QuanlyTaikhoanNvComponent', () => {
  let component: QuanlyTaikhoanNvComponent;
  let fixture: ComponentFixture<QuanlyTaikhoanNvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlyTaikhoanNvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyTaikhoanNvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
