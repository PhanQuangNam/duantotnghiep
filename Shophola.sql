create database Shophola ;
use Shophola ;
drop database Shophola ;

create table category(
Category_id		varchar(20) not null,
Category_name		varchar(50) not null,
Category_type		int not null,
Category_create_time	datetime not null,
Category_update_time	datetime not null,
primary key(Category_name)
);

 create table size(
 Size_id			varchar(20) not null,
 Size_name			varchar(50) not null,
 primary key(Size_name)
 );
 
drop table product;

create table product(
Product_id			varchar(20) not null,
Product_name		varchar(50) not null,
Product_description	varchar(255) not null,
Product_price		int not null,
Product_stock		int not null,
Product_status		boolean not null,
Product_img			varchar(255) not null,
Product_amount		int not null,
Size_name			varchar(50) not null,
Category_name		varchar(50) not null,
primary key(Product_id),
FOREIGN KEY (Category_name) REFERENCES category(Category_name),
FOREIGN KEY (Size_name) REFERENCES size(Size_name)
);


create table users(
Users_id		varchar(20) not null,
Users_first_name		varchar(50) not null,
Users_last_name			varchar(50) not null,
Users_address	varchar(100) not null,
Users_phone		varchar(10) not null,
Users_password	varchar(50) not null,
Users_roll		varchar(255) not null,
Users_active	bool,
Users_email		varchar(50) not null,
primary key(Users_id)
);

create table cart(
Cart_id			varchar(20) not null,
Users_id		varchar(20) not null,
Product_id		varchar(20) not null,
primary key(Cart_id),
foreign key(Product_id) references product(Product_id),
foreign key(Users_id) references users(Users_id)
);

create table orders(
Orders_id			varchar(20) not null,
Orders_status		boolean not null,
Orders_create_time	time not null,
Orders_update_time	time not null,
Orders_context		text null,
Users_id		varchar(20) not null,
Product_id		varchar(20) not null,
primary key(Orders_id),
foreign key(Product_id) references product(Product_id),
foreign key(Users_id) references users(Users_id)
);

create table warehouses(
Warehouses_id		varchar(20) not null,
Warehouses_amount	int not null,
Warehouses_create_time	time not null,
Product_id			varchar(20) not null,
primary key(Warehouses_id),
foreign key(Warehouses_id) references product(Product_id)
);

create table shipper(
Shipper_id			varchar(20) not null,
Shipper_status		varchar(20) not null,
Shipper_phone		varchar(10) not null,
primary key(Shipper_id)
);

create table bill(
Bill_id			varchar(20) not null,
Bill_create_time	time not null,
Bill_update_time	time not null,
Cart_id				varchar(20) not null,
primary key(Bill_id),
foreign key(Cart_id) references cart(Cart_id)
);

create table bill_details(
Bill_details_id			varchar(20) not null,
Bill_details_create_time	time not null,
Bill_details_update_time	time not null,
Bill_id				varchar(20) not null,
Shipper_id			varchar(20) not null,
primary key(Bill_details_id),
foreign key(Bill_id) references bill(Bill_id),
foreign key(Shipper_id) references shipper(Shipper_id)
);

select * from category;
INSERT INTO `category` VALUES ('C_ID_01','Áo dài tay','01','2020-01-01','2020-02-02');
INSERT INTO `category` VALUES ('C_ID_02','Áo cộc tay','02','2020-03-03','2020-04-04');
INSERT INTO `category` VALUES ('C_ID_03','full bộ','03','2020-03-03','2020-04-04');

select * from size;
INSERT INTO `size` VALUES ('S_ID_01','S');
INSERT INTO `size` VALUES ('S_ID_02','M');
INSERT INTO `size` VALUES ('S_ID_03','L');
INSERT INTO `size` VALUES ('S_ID_04','XL');
INSERT INTO `size` VALUES ('S_ID_05','XXL');

select * from product;
INSERT INTO `product` VALUES ('P_ID_01','Áo Bỉ','Bền','200000','1',1,'m','21','S','Áo dài tay');
INSERT INTO `product` VALUES ('P_ID_02','Áo Bỉ','áo','200000','1',0,'m','21','M','Áo cộc tay');
INSERT INTO `product` VALUES ('P_ID_03','Áo Bỉ','s','200000','1',0,'m','21','L','Áo dài tay');
INSERT INTO `product` VALUES ('P_ID_04','Áo Bỉ','s','200000','1',0,'m','21','XL','full bộ');
INSERT INTO `product` VALUES ('P_ID_05','Áo Bỉ','ad','200000','1',0,'m','21','XXL','Áo dài tay');
INSERT INTO `product` VALUES ('P_ID_06','Áo Bỉ','xs','200000','1',0,'m','21','L','Áo cộc tay');

insert into product value ('P_ID_01','Áo Bỉ','xxxxxxxxx','200000','1','1','m','211','C_ID_02','S_ID_01');
select product.Product_id, Product_name,Product_description, Product_price,Product_img, Product_amount,
	    size.Size_name, category.Category_name,Product_stock,Product_status
				from product join size on product.Size_name = size.Size_name
							 join category on category.Category_name = product.Category_name
                             where Product_id = 'P_ID_01'
                             ;
                             

select Size_id, Size_name from size ;
select Category_id , Category_name ,Category_type , Category_create_time, Category_update_time from category;