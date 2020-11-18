import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Users } from './model/Users';
import { Products } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  api = 'https://5f74b61d1cf3c900161cd6bd.mockapi.io';
  private baseUrl = 'http://localhost:8080/';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/trang`);
  }

  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/trang/${id}`)
  }

  getProductskhuyenmai(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/khuyenmai`);
  }

  getProductsbanchay(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/banchay`);
  }
  getProductsmoi(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/sanphammoi`);
  }

  //sản phẩm
  getProductSP(){
    return this.http.get(this.baseUrl + "getallProduct");
  }
  getProductid(product_id : number) : Observable<any>{
    return this.http.get(this.baseUrl + "getProductid/" + product_id );
  }
  deleteProduct(product_id : number):Observable<any>{
    return this.http.delete(this.baseUrl+"deleteProduct/"+ product_id);
  }
  CreateProduct(Products : Object) : Observable<any>{
    return this.http.post(this.baseUrl +"CreateProduct" +
      "",Products);
  }
  public updateProduct(product_id: number, Products : Products): Observable<any>{
    return this.http.put<any>(this.baseUrl + `updateProduct/${product_id}`, Products);
  }

  getCategory(){
    return this.http.get(this.baseUrl+"getCategory");
  }


  // tài khoản

  getUsers(){
    return this.http.get(this.baseUrl + "getUsers");
  }
  getUsersAD(){
    return this.http.get(this.baseUrl + "getUsersAD");
  }
  getUsersNV(){
    return this.http.get(this.baseUrl + "getUsersNV");
  }
  getUsersKH(){
    return this.http.get(this.baseUrl + "getUsersKH");
  }
  getUsersID(users_id : number) : Observable<any>{
    return this.http.get(this.baseUrl + "getUsersid/" + users_id );
  }
  createUsers(Users : Object) : Observable<any>{
    return this.http.post(this.baseUrl + "createUsers" ,Users)
  }

  // SeachUsers(users_first_name : String , users_last_name : String , users_account : String){
  //   return this.http.get(this.baseUrl + "SeachUsers/" + users_account);
  // }

  deleteUsers(users_id : number) :Observable<any>{
    return  this.http.delete(this.baseUrl + "deleteUsers/" + users_id)
  }

  public updateUsers(users_id: number, Users : Users): Observable<any>{
    return this.http.put<any>(this.baseUrl + `updateUsers/${users_id}`, Users);
  }


}
