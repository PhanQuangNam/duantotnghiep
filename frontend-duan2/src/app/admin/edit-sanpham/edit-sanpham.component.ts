import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../../model/Product';
import { Category } from 'src/app/model/Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-sanpham',
  templateUrl: './edit-sanpham.component.html',
  styleUrls: ['./edit-sanpham.component.scss']
})
export class EditSanphamComponent implements OnInit {
  Products : Products ;
  Category : Category[];
  CategorySelected: any = {};

  constructor(
    private http:HttpClient,
    private ServiceService: ServiceService,
    private router: Router,
    private activate: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProductid();
    this.upData();
  }

  upData(){
    this.ServiceService.getCategory().subscribe((data : any[]) => {
      this.Category = data })
  }
  onCategorySelected(val : Category){
    this.CategorySelected = val
  }

  getProductid() {
    this.activate.params.subscribe((param) => {
      this.ServiceService.getProductid(param.product_id).subscribe((data) => {
        console.log(data);
        this.Products = data;
      });
    });
  }

  save() {
    const product_id = this.activate.snapshot.params.product_id
    this.Products.category_id = this.CategorySelected;
    console.log(this.Products)
    this.ServiceService.updateProduct(product_id,this.Products).subscribe(
      (data) => {this.gotoList(),console.log(data) },
       err => {console.log(err)});
    }
  gotoList() {
    if (confirm("Sửa sản phẩm thành công")) {
      this.router.navigate(['/dashboard/quanly-sanpham']);
    }
  }

  url;
  msg = "";

  selectFile(event) {
    if(!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
    }
  }
}

