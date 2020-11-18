import { Category } from 'src/app/model/Category';

export class Sanpham{
  product_id: String;
  product_name:String;
  product_description : String ;
  product_price : number;
  product_img: String;
  product_amount : number;
  category_id : Category;
  category_name : Category;
  product_stock : number;
  product_status : boolean;
}
