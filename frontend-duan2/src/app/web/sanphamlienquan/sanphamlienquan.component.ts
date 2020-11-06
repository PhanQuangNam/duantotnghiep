import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../../service.service";
import {Product} from "../../Product";

@Component({
  selector: 'app-sanphamlienquan',
  templateUrl: './sanphamlienquan.component.html',
  styleUrls: ['./sanphamlienquan.component.scss']
})
export class SanphamlienquanComponent implements OnInit {
  products: Product[];
  constructor(
    private Services : ServiceService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.Services.getProducts().subscribe(Response=> this.products = Response,error => console.log(error))
  }
}
