package com.example.demo.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
@Transactional
public class ProductService {
	
	 @Autowired
	 private ProductRepository ProductRepository;	 
	 
	 @Autowired
	JdbcTemplate jdbcTemplate;
	 
	 public List<Product> listAll() {
	        return ProductRepository.findAll();
	    }
	 
	 public List<Product> GetProduct(){
			String sql = "select product.Product_id, Product_name,Product_description,Product_price,Product_status,Product_img,\r\n" + 
					"						Product_amount,Product_size,Product_color,category.Category_id, category.Category_name\r\n" + 
					"				from product join category on product.Category_id = category.Category_id";
			return jdbcTemplate.query(sql , new RowMapper<Product>() {
				public Product mapRow (ResultSet rs, int rownumber) throws SQLException {
					Product sp = new Product();
					sp.setProduct_id(rs.getInt(1));
					sp.setProduct_name(rs.getString(2));
					sp.setProduct_description(rs.getString(3));
					sp.setProduct_price(rs.getInt(4));
					sp.setProduct_status(rs.getBoolean(5));
					sp.setProduct_img(rs.getString(6));
					sp.setProduct_amount(rs.getInt(7));
					sp.setProduct_size(rs.getString(8));
					sp.setProduct_color(rs.getString(9));
					sp.setCategory_id(rs.getInt(10));
					sp.setCategory_name(rs.getString(11));
					return sp;
				}
			});
		}
	 
//	 public void CreateProduct(String product_name, String product_description , Number product_price,
//				boolean product_status, String product_img, Number product_amount, String product_size,
//				String product_color, Number category_id) {
//			String sql = "INSERT INTO `product` ( Product_name,Product_description,Product_price,Product_status,\r\n" + 
//					"Product_img,Product_amount,Product_size,Product_color,Category_id) \r\n" + 
//					"VALUES (?,?,?,?,?,?,?,?,?); ";
//			jdbcTemplate.update(sql,product_name, product_description, product_price, product_status ,
//					product_img, product_amount, product_size, product_color, category_id);
//		}
	 
	 public void save(Product Product) {
		 ProductRepository.save(Product);
	    }
	     
	 public Product get(Integer product_id) {
	        return ProductRepository.findById(product_id).get();
	    }
	     
	    public void delete(Integer product_id) {
	    	ProductRepository.deleteById(product_id);
	    }
}
