import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Sanpham } from'../../model/Sanpham';

@Component({
  selector: 'app-quanly-sanpham',
  templateUrl: './quanly-sanpham.component.html',
  styleUrls: ['./quanly-sanpham.component.scss']
})
export class QuanlySanphamComponent implements OnInit {
  sanphams : Sanpham[];
  searchText;
  constructor(
    private ServiceService : ServiceService
  ) { }

  ngOnInit(): void {
    this.getSanpham();
  }

  getSanpham(){
    this.ServiceService.getSanpham().subscribe((data: any[]) => {
      this.sanphams = data;
      console.log(data);
    });
  }

  deleteSanpham(product_id){
    this.ServiceService.deleteSanpham(product_id).subscribe( Response =>
      {this.sanphams= this.sanphams.filter(sanpham => sanpham.product_id != product_id)}
    )
  }

  clickMethod(name: string) {
    if(confirm("Bạn chắc chắn muốn xóa? "+name)) {
        this.deleteSanpham(name);
    }
  }



}
