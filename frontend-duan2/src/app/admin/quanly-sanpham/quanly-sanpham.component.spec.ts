import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlySanphamComponent } from './quanly-sanpham.component';

describe('QuanlySanphamComponent', () => {
  let component: QuanlySanphamComponent;
  let fixture: ComponentFixture<QuanlySanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlySanphamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlySanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
