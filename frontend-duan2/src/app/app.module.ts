import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { TrangchuComponent } from './web/trangchu/trangchu.component';
import { ServiceService } from './service.service';
import { SlideComponent } from './web/slide/slide.component';
import { HeaderComponent } from './web/header/header.component';
import { FooterComponent } from './web/footer/footer.component';
import { ThongtinsanphamComponent } from './web/thongtinsanpham/thongtinsanpham.component';
import { SanphamlienquanComponent } from './web/sanphamlienquan/sanphamlienquan.component';
import { QuanlySanphamComponent } from './admin/quanly-sanpham/quanly-sanpham.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditSanphamComponent } from './admin/edit-sanpham/edit-sanpham.component';
import { AddSanphamComponent } from './admin/add-sanpham/add-sanpham.component';
import { Thongtinsanpham1Component } from './web/thongtinsanpham1/thongtinsanpham1.component';
import { QuanlyTaikhoanComponent } from './admin/quanly-taikhoan/quanly-taikhoan.component';
import { AddTaikhoanComponent } from './admin/add-taikhoan/add-taikhoan.component';
import { EditTaikhoanComponent } from './admin/edit-taikhoan/edit-taikhoan.component';
import { Header1Component } from './web/header1/header1.component';
import { QuanlyTaikhoanNvComponent } from './admin/quanly-taikhoan-nv/quanly-taikhoan-nv.component';
import { QuanlyTaikhoanKhComponent } from './admin/quanly-taikhoan-kh/quanly-taikhoan-kh.component';
import { AddTaikhoanNvComponent } from './admin/add-taikhoan-nv/add-taikhoan-nv.component';
import { AddTaikhoanKhComponent } from './admin/add-taikhoan-kh/add-taikhoan-kh.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GioithieuComponent,
    SanphamComponent,
    TintucComponent,
    LienheComponent,
    TrangchuComponent,
    SlideComponent,
    HeaderComponent,
    FooterComponent,
    ThongtinsanphamComponent,
    SanphamlienquanComponent,
    QuanlySanphamComponent,
    DashboardComponent,
    LoginComponent,
    EditSanphamComponent,
    AddSanphamComponent,
    Thongtinsanpham1Component,
    QuanlyTaikhoanComponent,
    AddTaikhoanComponent,
    EditTaikhoanComponent,
    Header1Component,
    QuanlyTaikhoanNvComponent,
    QuanlyTaikhoanKhComponent,
    AddTaikhoanNvComponent,
    AddTaikhoanKhComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],

})
export class AppModule { }
