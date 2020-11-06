import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thongtinsanpham1Component } from './thongtinsanpham1.component';

describe('Thongtinsanpham1Component', () => {
  let component: Thongtinsanpham1Component;
  let fixture: ComponentFixture<Thongtinsanpham1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thongtinsanpham1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thongtinsanpham1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
