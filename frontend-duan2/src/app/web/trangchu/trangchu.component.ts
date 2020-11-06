import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {
  products: Product[];
  products1: Product[];
  products2: Product[];
  products3: Product[];
  page = 1;
  pageSize = 6;
  page1 = 1;
  pageSize1 = 6;
  page2 = 1;
  pageSize2 = 6;
  constructor(
    private Services : ServiceService
  ) { }

  ngOnInit(): void {
    this.getProducts();
     this.getProductskhuyenmai();
     this.getProductsbanchay();
     this.getProductsmoi()
  }

  getProducts(){
    this.Services.getProducts().subscribe(Response=> this.products = Response,error => console.log(error))
   }

   getProductskhuyenmai(){
    this.Services.getProductskhuyenmai().subscribe(Response=> this.products1 = Response,error => console.log(error))
   }

   getProductsbanchay(){
    this.Services.getProductsbanchay().subscribe(Response=> this.products2 = Response,error => console.log(error))
   }

   getProductsmoi(){
    this.Services.getProductsmoi().subscribe(Response=> this.products3 = Response,error => console.log(error))
   }
}
