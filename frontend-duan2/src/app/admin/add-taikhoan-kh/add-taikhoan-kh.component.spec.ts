import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaikhoanKhComponent } from './add-taikhoan-kh.component';

describe('AddTaikhoanKhComponent', () => {
  let component: AddTaikhoanKhComponent;
  let fixture: ComponentFixture<AddTaikhoanKhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaikhoanKhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaikhoanKhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
