create database Shophola1 ;
use Shophola1 ;
drop database Shophola1 ;

create table category(
Category_id			int auto_increment primary key not null,
Category_name		varchar(50) not null
);

create table product(
Product_id			int auto_increment primary key not null,
Product_name		varchar(50) not null,
Product_description	varchar(255) not null,
Product_price		int not null,
Product_status		boolean not null,
Product_img			varchar(255) not null,
Product_amount		int not null,
Product_size 		varchar(50) not null,
Product_color      	varchar(50) not null,
Category_id			int not null,
foreign key(Category_id) references category(Category_id)
);

create table users(
Users_id			int auto_increment not null,
Users_first_name		varchar(50) not null,
Users_last_name			varchar(50) not null,
Users_address		varchar(100)  null,
Users_phone			varchar(10)  null,
Users_account		varchar(50) not null,
Users_password		varchar(50) not null,
Users_roll			varchar(255) not null,
Users_img			varchar(255) null,
Users_email			varchar(50) null,
Users_sex			varchar(50) null,
primary key(Users_id)
);

create table cart(
Cart_id			int auto_increment not null,
Users_id		int not null,
Product_id		int not null,
Users_first_name		varchar(50) not null,
Users_last_name			varchar(50) not null,
Users_address		varchar(100) not null,
Users_phone			varchar(10) not null,
Users_img			text,
Users_email			varchar(50) not null,
Product_name		varchar(50) not null,
Product_description	varchar(255) not null,
Product_price		int not null,
Product_img			varchar(255) not null,
Product_amount		int not null,
Category_name		varchar(50) not null,
Category_type		int not null,
primary key(Cart_id),
foreign key(Product_id) references product(Product_id),
foreign key(Users_id) references users(Users_id)
);

create table orders(
Orders_id			int auto_increment not null,
Orders_status		boolean not null,
Orders_number		int not null,
Orders_create_time	time not null,
Orders_update_time	time not null,
Users_id			int not null,
primary key(Orders_id),
foreign key(Users_id) references users(Users_id)
);

create table orderDetail (
OrderDetail 			int auto_increment not null,
Orders_id				int not null,
Orders_status			boolean not null,
Orders_create_time		time not null,
Orders_update_time		time not null,
Product_id				int not null,
Product_name			varchar(50) not null,
Product_description		varchar(255) not null,
Product_price			int not null,
Product_status			boolean not null,
Product_img				varchar(255) not null,
Product_amount			int not null,
Product_size 			varchar(50) not null,
Product_color      		varchar(50) not null,
primary key(OrderDetail),
foreign key(Orders_id) references orders(Orders_id),
foreign key(Product_id) references product(Product_id)
);

create table shipper(
Shipper_id			int auto_increment not null,
Shipper_status		varchar(20) not null,
Shipper_phone		varchar(10) not null,
OrderDetail 		int not null,
primary key(Shipper_id),
foreign key(OrderDetail) references orderDetail(OrderDetail)
);

create table payment(
Payment_id		int auto_increment not null,
Payment_type	varchar(50) not null,
Cart_id			int not null,
primary key(Payment_id),
foreign key(Cart_id) references cart(Cart_id)
)


select * from category;
INSERT INTO `category` (Category_name) VALUES('Áo câu lạc bộ');
INSERT INTO `category` (Category_name) VALUES('Áo đội tuyển quốc gia');
INSERT INTO `category` (Category_name) VALUES('Áo không logo');
INSERT INTO `category` (Category_name) VALUES('Áo dài tay');
INSERT INTO `category` (Category_name) VALUES('Áo khoác ');
INSERT INTO `category` (Category_name) VALUES('Phụ kiện');

select * from product;
-- Áo câu lạc bộ
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','98','S','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','98','M','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','98','L','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','98','XL','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','98','XXL','Đỏ Xanh','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','276000','0','q','243','S','Trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','276000','0','q','243','M','Trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','276000','0','q','243','L','Trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','276000','0','q','243','XXL','Trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','276000','0','q','243','XL','Trắng','1'); 


INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','236000','0','q','23','L','Đen đỏ','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','236000','0','q','23','XL','Đen đỏ','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','236000','0','q','23','XXL','Đen đỏ','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','236000','0','q','23','S','Đen đỏ','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','236000','0','q','23','M','Đen đỏ','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','300000','0','q','54','XL','Vàng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','300000','0','q','54','XXL','Vàng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','300000','0','q','54','L','Vàng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','300000','0','q','54','S','Vàng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','300000','0','q','54','M','Vàng','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Inter Milan','450000','0','q','345','XL','Đỏ trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Inter Milan','450000','0','q','345','XXL','Đỏ trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Inter Milan','450000','0','q','345','L','Đỏ trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Inter Milan','450000','0','q','345','M','Đỏ trắng','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Inter Milan','450000','0','q','345','S','Đỏ trắng','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','200000','0','q','234','XXL','Tím','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','200000','0','q','234','XL','Tím','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','200000','0','q','234','S','Tím','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','200000','0','q','234','M','Tím','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','200000','0','q','234','L','Tím','1'); 


INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester United','190000','0','q','123','M','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester United','190000','0','q','123','S','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester United','190000','0','q','123','L','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester United','190000','0','q','123','XXL','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester United','190000','0','q','123','XL','Đỏ Xanh','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester City','150000','0','q','86','M','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester City','150000','0','q','86','S','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester City','150000','0','q','86','L','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester City','150000','0','q','86','XL','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Manchester City','150000','0','q','86','XXL','Đỏ Xanh','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Chelsea','250000','0','q','321','M','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Chelsea','250000','0','q','321','L','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Chelsea','250000','0','q','321','S','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Chelsea','250000','0','q','321','XL','Đỏ Xanh','1'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Chelsea','250000','0','q','321','XXL','Đỏ Xanh','1'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Nga Euro ','120000','0','q','23','M','Trắng','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Đức Euro','130000','0','q','543','S','Đen đỏ','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Pháp Euro','140000','0','q','53','L','Vàng','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Anh Euro','150000','0','q','34','XL','Đỏ trắng','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Bỉ Euro','160000','0','q','134','XXL','Tím','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Ba Lan Euro','170000','0','q','156','M','Đỏ Xanh','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Ukraina Euro','180000','0','q','136','M','Trắng','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Thụy Điển Euro','190000','0','q','146','S','Đen đỏ','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Đan Mạch Euro','200000','0','q','23','L','Vàng','2'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Thụy Sĩ Euro','210000','0','q','98','XL','Đỏ trắng','2'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Napoli','250000','0','q','100','S','Trắng','3'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Barcelona','250000','0','q','100','M','Đỏ Xanh','3'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Atlentico Madrid','250000','0','q','100','L','Đen','3'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Real Madrid','250000','0','q','100','XXl','Đen đỏ','3'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Barcelona','Áo Juventus','250000','0','q','100','XL','Vàng','3'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo bóng đá dài tay đội tuyển','Áo Inter Milan','250000','0','q','98','XL','Đỏ trắng','4'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo bóng đá dài tay câu lạc bộ','Áo Napoli','250000','0','q','98','XXL','Tím','4'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo bóng đá dài tay câu lạc bộ','Áo Napoli','250000','0','q','98','XXL','Tím','4'); 

INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES ('Áo Áo khoác bóng đá đội tuyển','Áo Juventus','250000','0','q','100','XL','Vàng','5'); 
INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,
Product_img,Product_amount,Product_size,Product_color,Category_id) 
VALUES (' khoác bóng đá câu lạc bộ','Áo Juventus','250000','0','q','100','XL','Vàng','5'); 


select * from users;
INSERT INTO users (Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,
Users_account,Users_sex	)
VALUES ('Phan','Nam','Hà nội','0987865561','123','NV','m','Phanam2611@gmail.com','Phan Nam','Nam');
INSERT INTO users (Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,
Users_account,Users_sex	)
VALUES ('Hữu','Nhuyên','Hà nội','0912353686','123','AD','m','Huunguyen@gmail.com','Huu Nguyen','Nữ');
INSERT INTO users (Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,
Users_account,Users_sex	)
VALUES ('Phan','X','Hà nội','0975154102','123','ND','m','x@gmail.com','Phan X', 'Khác');

select Users_id , Users_first_name , Users_last_name , Users_address , Users_phone ,
Users_password , Users_roll , Users_img , Users_email, Users_account , Users_sex from users 
where Users_account = 'Phan X' or 
Users_first_name ='Hữu' or Users_last_name = 'X';

update users set Users_first_name = 'Phan' , Users_last_name ='N', Users_address  = 'Ba Vì',
				Users_phone = '0987865561' , Users_password = '1234',  Users_roll = 'NV' , Users_img = 'b' , 
                Users_email ='', Users_account ='Phan XX', Users_sex ='Nam'
				 where  Users_id  ='5';
			
select Product_id, Product_name,Product_description,Product_price,Product_status,Product_img,
		Product_amount,Product_size,Product_color, Category_id from product where Product_id = ?  ;

select Category_id , Category_name from category;

select product.Product_id, Product_name,Product_description,Product_price,Product_status,Product_img,
						Product_amount,Product_size,Product_color, category.Category_name
				from product join category on product.Category_id = category.Category_id
                where Product_id = '1'
