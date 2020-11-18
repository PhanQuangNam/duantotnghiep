import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Products } from '../../model/Product';
import { Category } from 'src/app/model/Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-sanpham',
  templateUrl: './add-sanpham.component.html',
  styleUrls: ['./add-sanpham.component.scss']
})
export class AddSanphamComponent implements OnInit {
  Products : Products = new Products();
  Category : Category[];
  CategorySelected: any = {};
  url;
  msg = "";

  constructor(
    private http: HttpClient,
    private ServiceService : ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.upData();
  }

  upData(){
    this.ServiceService.getCategory().subscribe((data : any[]) => {
      this.Category = data})
  }

  onCategorySelected(val: Category){
    this.CategorySelected = val ;
  }

  save() {
    this.Products.category_id = this.CategorySelected ;
    console.log(this.Products) ;
    this.ServiceService.CreateProduct(this.Products).subscribe(
      (data) =>{this.gotoList(), console.log(data)},
      (error) => console.log(error),
      );
    }

  onSubmit() {
    this.save();
  }
  gotoList() {
    if (confirm("Thêm sản phẩm mới thành công")) {
      this.router.navigate(['/dashboard/quanly-sanpham']);
    }
  }
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
