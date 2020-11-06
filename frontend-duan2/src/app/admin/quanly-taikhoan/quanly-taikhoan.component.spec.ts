import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyTaikhoanComponent } from './quanly-taikhoan.component';

describe('QuanlyTaikhoanComponent', () => {
  let component: QuanlyTaikhoanComponent;
  let fixture: ComponentFixture<QuanlyTaikhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlyTaikhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyTaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
