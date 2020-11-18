import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { Users } from'../../model/Users';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-taikhoan',
  templateUrl: './edit-taikhoan.component.html',
  styleUrls: ['./edit-taikhoan.component.scss']
})
export class EditTaikhoanComponent implements OnInit {
  Users : Users ;
  url;
  msg = "";
  constructor(
    private http:HttpClient,
    private ServiceService: ServiceService,
    private router: Router,
    private activate: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUsersID();
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

  getUsersID(){
    this.activate.params.subscribe((param) => {
      this.ServiceService.getUsersID(param.id).subscribe((data) =>{
        console.log(data);
        this.Users = data;
      })
    })
  }


  save() {
    const id = this.activate.snapshot.params.id
    this.ServiceService.updateUsers(id,this.Users).subscribe(
      (data) => {this.gotoList(),console.log(data)},
      err => {console.log(err)}
    );
  }

  gotoList() {
    if (confirm("Sửa khoản thành công")) {
      this.router.navigate(['/dashboard/quanly-taikhoan']);
    }
  }
}
