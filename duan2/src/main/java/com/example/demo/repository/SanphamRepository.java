package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.Sanpham;
import com.example.demo.model.*;
@Repository
public class SanphamRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Sanpham> getSanpham(){
		String sql = "select product.Product_id, Product_name,Product_description, Product_price,Product_img, Product_amount,\r\n" + 
				"	    size.Size_name, category.Category_name,Product_status, Product_stock\r\n" + 
				"				from product join size on product.Size_name = size.Size_name\r\n" + 
				"							 join category on category.Category_name = product.Category_name";
		return jdbcTemplate.query(sql , new RowMapper<Sanpham>() {
			public Sanpham mapRow (ResultSet rs, int rownumber) throws SQLException {
				Sanpham sp = new com.example.demo.dto.Sanpham();
				sp.setProduct_id(rs.getString(1));
				sp.setProduct_name(rs.getString(2));
				sp.setProduct_description(rs.getString(3));
				sp.setProduct_price(rs.getInt(4));
				sp.setProduct_img(rs.getString(5));
				sp.setProduct_amount(rs.getInt(6));
				sp.setSize_name(rs.getString(7));
				sp.setCategory_name(rs.getString(8));
				sp.setProduct_status(rs.getBoolean(9));
				sp.setProduct_stock(rs.getInt(10));
				return sp;
			}
		});
	}
	
	public com.example.demo.model.Sanpham getSanphamId(String Product_id){
		String sql ="select product.Product_id, Product_name,Product_description, Product_price,Product_img, Product_amount,\r\n" + 
				"	    size.Size_name, category.Category_name,Product_status,Product_stock\r\n" + 
				"				from product join size on product.Size_name = size.Size_name\r\n" + 
				"							 join category on category.Category_name = product.Category_name\r\n" + 
				"                             where Product_id = '" +Product_id+ "'";
		return jdbcTemplate.queryForObject(sql, new RowMapper<com.example.demo.model.Sanpham>() {
			public com.example.demo.model.Sanpham mapRow (ResultSet rs, int rownumber) throws SQLException {
				com.example.demo.model.Sanpham sp = new com.example.demo.model.Sanpham();
				sp.setProduct_id(rs.getString(1));
				sp.setProduct_name(rs.getString(2));
				sp.setProduct_description(rs.getString(3));
				sp.setProduct_price(rs.getInt(4));
				sp.setProduct_img(rs.getString(5));
				sp.setProduct_amount(rs.getInt(6));
				sp.setSize_name(rs.getString(7));
				sp.setCategory_name(rs.getString(8));
				sp.setProduct_stock(rs.getInt(9));
				sp.setProduct_status(rs.getBoolean(10));
				return sp;
			}
		});
	}
	
	
	
	
//	public List<Sanpham> seachSanpham(String Product_name){
//		String sql = "select product.Product_id, Product_name,Product_description, Product_price, Product_amount, size.Size_id , Size_name, category.Category_id ,Category_name\r\n" + 
//				"from product join size on product.Size_id = size.Size_id\r\n" + 
//				"			 join category on category.Category_id = product.Category_id";
//		System.out.println(sql);
//		return jdbcTemplate.query(sql , new RowMapper<Sanpham>() {
//			public Sanpham mapRow (ResultSet rs, int rownumber) throws SQLException {
//				Sanpham sp = new com.example.demo.dto.Sanpham();
//				sp.setProduct_id(rs.getString(1));
//				sp.setCategory_name(rs.getString(2));
//				sp.setProduct_price(rs.getInt(3));
//				sp.setProduct_description(rs.getString(4));
//				sp.setSize_name(rs.getString(5));
//				sp.setProduct_name(rs.getString(6));
//				sp.setProduct_img(rs.getString(7));
//				sp.setProduct_amount(rs.getInt(8));
//				sp.setProduct_status(rs.getBoolean(9));
//				sp.setProduct_stock(rs.getInt(10));
//				return sp;
//			}
//		});
//	}
	
	public void CreateSanpham(String Product_name, String Product_description, int Product_price, int Product_stock,
			 int Product_amount, String Product_id, boolean Product_status
			 , String Product_img, String Category_name, String Size_name) {
		String insertQuery = "insert into product (Product_id,Product_name,Product_description"
				+ ",Product_price,Product_stock,Product_status,Product_img,Product_amount,Category_name"
				+ ",Size_name) values (?,?,?,?,?,?,?,?,?,?)";
		jdbcTemplate.update(insertQuery,Product_id,Product_name,Product_description
				,Product_price,Product_stock,Product_status,Product_img,Product_amount,Category_name,Size_name);
	}
	
	public void deleteSanpham(String Product_id) {
		String sql = "delete from product where Product_id='" + Product_id + "'";
		jdbcTemplate.execute(sql);
	}
	
	public void updateSanpham(String Product_name, String Product_description, int Product_price, int Product_stock,
			 int Product_amount, String Product_id, boolean Product_status
			 , String Product_img, String Category_name, String Size_name) {
		String updateQuery = "update product set Product_name =?, Product_description =?, Product_price =?,\r\n" + 
				"					Product_amount =?, Product_status =?, Product_stock =?,\r\n" + 
				"                   Product_img =?, Category_name =?, Size_name =?\r\n" + 
				"					where Product_id =?";
		jdbcTemplate.update(updateQuery,Product_id,Product_name,Product_description
				,Product_price,Product_stock,Product_status,Product_img,Product_amount,Category_name , Size_name);
	}
	
	
}
