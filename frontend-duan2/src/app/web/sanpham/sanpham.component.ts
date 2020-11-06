import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.scss']
})
export class SanphamComponent implements OnInit {
  products: Product[];
  page = 1;
  pageSize = 6;
  constructor(
    private Services : ServiceService

  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.Services.getProducts().subscribe(Response=> this.products = Response,error => console.log(error))
  }

}
