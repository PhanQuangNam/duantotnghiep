import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Sanpham } from'../../model/Sanpham';
import { Size } from 'src/app/model/Size';
import { Category } from 'src/app/model/Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-sanpham',
  templateUrl: './add-sanpham.component.html',
  styleUrls: ['./add-sanpham.component.scss']
})
export class AddSanphamComponent implements OnInit {
  Sanpham : Sanpham = new Sanpham();
  Size : Size[];
  Category : Category[];
  SizeSelected: any = {};
  CategorySelected: any = {};

  constructor(
    private http:HttpClient,
    private ServiceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.save();
    this.upData();
  }

  upData(){
    this.ServiceService.getSize().subscribe((data : any[]) =>{
      this.Size = data })
    this.ServiceService.getCategory().subscribe((data : any[]) => {
      this.Category = data })
  }

  onSizeSelected( val : Size){
    this.SizeSelected = val
  }
  onCategorySelected(val : Category){
    this.CategorySelected = val
  }

  save() {
    this.Sanpham.size_name = this.SizeSelected;
    this.Sanpham.category_name = this.CategorySelected;
    console.log(this.Sanpham)
    this.ServiceService.createSanpham(this.Sanpham).subscribe(
      (data) =>{
        this.gotoList(), console.log(data)
      } ,
      (error) => console.log(error),
      
    );
   
  }
  onSubmit() {
    this.save();
  }
  gotoList() {
    if (confirm("Thêm lớp học thành công")) {
      this.router.navigate(['/dashboard/quanly-sanpham']);
    }
  }
}
