import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';
import { Router } from '@angular/router';
import { Users } from'../../model/Users';

@Component({
  selector: 'app-add-taikhoan-kh',
  templateUrl: './add-taikhoan-kh.component.html',
  styleUrls: ['./add-taikhoan-kh.component.scss']
})
export class AddTaikhoanKhComponent implements OnInit {
  Users : Users = new Users();
  User : Users [];
  url;
  msg = "";
  constructor(
    private http:HttpClient,
    private ServiceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
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


  save(){
    this.Users.users_roll = "ND";
    this.ServiceService.createUsers(this.Users).subscribe(
      (data) => {this.gotoList(),console.log(data)},
      (error => console.log(error))
    );
    this.Users = new Users();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    if (confirm("Thêm tài khoản thành công")) {
      this.router.navigate(['/dashboard/quanly-taikhoan-kh']);
    }
  }


}

