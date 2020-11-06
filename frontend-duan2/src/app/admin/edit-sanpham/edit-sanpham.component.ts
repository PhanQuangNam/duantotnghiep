import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sanpham } from'../../model/Sanpham';
import { Size } from 'src/app/model/Size';
import { Category } from 'src/app/model/Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-sanpham',
  templateUrl: './edit-sanpham.component.html',
  styleUrls: ['./edit-sanpham.component.scss']
})
export class EditSanphamComponent implements OnInit {
  Sanpham : Sanpham = new Sanpham();
  Size : Size[];
  Category : Category[];
  SizeSelected: any = {};
  CategorySelected: any = {};

  constructor(
    private http:HttpClient,
    private ServiceService: ServiceService,
    private router: Router,
    private activate: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSanphamId();
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

  getSanphamId() {
    this.activate.params.subscribe((param) => {
      this.ServiceService.getSanphamId(param.product_id).subscribe((data) => {
        console.log(data);
        this.Sanpham = data;
      });
    });
  }

  save() {
    const product_id = this.activate.snapshot.params.product_id
    this.Sanpham.size_name = this.SizeSelected;
    this.Sanpham.category_name = this.CategorySelected;
    console.log(this.Sanpham)
    this.ServiceService.updateSanpham(product_id,this.Sanpham).subscribe(
      (data) => {  
        console.log(data);   
        this.router.navigate(['/dashboard/quanly-sanpham']);
       },
       err => {
        console.log(err)
       },
       
    )
    this.Sanpham = new Sanpham();
  }
}

