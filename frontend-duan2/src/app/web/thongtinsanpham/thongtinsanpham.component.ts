import { Component, OnInit } from '@angular/core';
import { Product } from '../../Product';
import { ServiceService } from '../../service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thongtinsanpham',
  templateUrl: './thongtinsanpham.component.html',
  styleUrls: ['./thongtinsanpham.component.scss']
})
export class ThongtinsanphamComponent implements OnInit {
  products: Product;
  constructor(
    private Services : ServiceService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.Services.getProduct(param.id).subscribe(data => {this.products = data})
    })
  }
}
