import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { GioithieuComponent } from './web/gioithieu/gioithieu.component';
import { SanphamComponent } from './web/sanpham/sanpham.component';
import { TintucComponent } from './web/tintuc/tintuc.component';
import { LienheComponent } from './web/lienhe/lienhe.component';
import { TrangchuComponent } from './web/trangchu/trangchu.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { QuanlySanphamComponent } from './admin/quanly-sanpham/quanly-sanpham.component';
import { LoginComponent } from './login/login.component';
import { AddSanphamComponent } from './admin/add-sanpham/add-sanpham.component';
import { EditSanphamComponent } from './admin/edit-sanpham/edit-sanpham.component';
import {ThongtinsanphamComponent} from './web/thongtinsanpham/thongtinsanpham.component';
import {Thongtinsanpham1Component} from './web/thongtinsanpham1/thongtinsanpham1.component';
import {QuanlyTaikhoanNvComponent} from './admin/quanly-taikhoan-nv/quanly-taikhoan-nv.component';
import {QuanlyTaikhoanKhComponent} from './admin/quanly-taikhoan-kh/quanly-taikhoan-kh.component';
import {QuanlyTaikhoanComponent} from './admin/quanly-taikhoan/quanly-taikhoan.component';
import {AddTaikhoanComponent} from './admin/add-taikhoan/add-taikhoan.component';
import {EditTaikhoanComponent} from './admin/edit-taikhoan/edit-taikhoan.component';
import {AddTaikhoanNvComponent} from './admin/add-taikhoan-nv/add-taikhoan-nv.component';
import {AddTaikhoanKhComponent} from './admin/add-taikhoan-kh/add-taikhoan-kh.component';

const routes: Routes = [
    {path : '' , redirectTo : 'home/trangchu' , pathMatch : 'full'},
    {path: 'login', component: LoginComponent},
    // {path: 'dangky', component: DangkyComponent},
    // { path: 'giohang', component: GiohangComponent },
    {path: 'home', component: HomeComponent,
      children : [
        { path: 'trangchu', component: TrangchuComponent },
        { path: 'gioithieu', component: GioithieuComponent },
        { path: 'sanpham', component: SanphamComponent },
        { path: 'tintuc', component: TintucComponent },
        { path: 'lienhe', component: LienheComponent },
        {path : 'thongtinsanpham/:id' , component: ThongtinsanphamComponent},
        {path : 'thongtinsanpham1' , component: Thongtinsanpham1Component},
      ]},
    {path : 'dashboard', component: DashboardComponent,
      children : [
        {path : '' , redirectTo : 'dashboard' , pathMatch : 'full'},
        {path : 'quanly-sanpham', component: QuanlySanphamComponent},
        {path : 'quanly-add-sanpham', component: AddSanphamComponent},
        {path : 'edit-sanpham/:product_id' ,component: EditSanphamComponent},
        {path : 'edit-sanpham' ,component: EditSanphamComponent},
        {path : 'quanly-taikhoan', component: QuanlyTaikhoanComponent},
        {path : 'quanly-taikhoan-nv', component: QuanlyTaikhoanNvComponent},
        {path : 'quanly-taikhoan-kh', component: QuanlyTaikhoanKhComponent},
        {path : 'quanly-add-taikhoan', component: AddTaikhoanComponent},
        {path : 'quanly-add-taikhoan-nv', component: AddTaikhoanNvComponent},
        {path : 'quanly-add-taikhoan-kh', component: AddTaikhoanKhComponent},
        {path : 'edit-taikhoan/:id' ,component: EditTaikhoanComponent},
      ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
