import { Injectable } from '@angular/core';
import { Product } from './Product';
import { Sanpham } from'./model/Sanpham';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

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
  
  getSanpham(){
    return this.http.get(this.baseUrl+"getSanpham");
  }

  getSanphamId(product_id : number):Observable<any>{
    return this.http.get(this.baseUrl+"getSanpham/"+product_id);
  }

  deleteSanpham(Sanpham : number):Observable<any>{
    return this.http.delete(this.baseUrl+"Sanpham/"+Sanpham);
  }

  createSanpham(Sanpham: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"createSanpham",Sanpham);
  }

  updateSanpham(product_id:string, Sanpham: Sanpham): Observable<any>{
    return this.http.put<any>(this.baseUrl + `updateSanpham/${product_id}`, Sanpham);
  }


  //Size

  getSize(){
    return this.http.get(this.baseUrl+"getSize");
  }

  //Category

  getCategory(){
    return this.http.get(this.baseUrl+"getCategory");
  }

}
