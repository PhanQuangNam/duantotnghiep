import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Users } from '../../model/Users';

@Component({
  selector: 'app-quanly-taikhoan',
  templateUrl: './quanly-taikhoan.component.html',
  styleUrls: ['./quanly-taikhoan.component.scss']
})
export class QuanlyTaikhoanComponent implements OnInit {
  Users : Users [];
  constructor(
    private ServiceService : ServiceService
  ) { }

  ngOnInit(): void {
    this.getUsersAD();
  }

  getUsersAD(){
    this.ServiceService.getUsersAD().subscribe((data : any[]) =>{
      this.Users = data;
      console.log(data);
    })
  }


  deleteUsers(users_id){
    this.ServiceService.deleteUsers(users_id).subscribe( Response =>
    {this.Users = this.Users.filter(Users => Users.users_id != users_id)})
  }

  clickMethod(name: string) {
    if(confirm("Bạn chắc chắn muốn xóa? "+name)) {
      this.deleteUsers(name);
    }
  }

}
