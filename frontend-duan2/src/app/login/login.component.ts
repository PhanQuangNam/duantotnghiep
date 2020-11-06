import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Sanpham } from'../model/Sanpham';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  sanphams : Sanpham[];
  // page = 1;
  // pageSize = 10;
  p : Number=1;
  constructor(
    private ServiceService : ServiceService
  ) { }

  ngOnInit(): void {
    this.getSanpham()
  }

  getSanpham(){
    this.ServiceService.getSanpham().subscribe((data: any[]) => {
      this.sanphams = data;
      console.log(data);
    });
  }

}
