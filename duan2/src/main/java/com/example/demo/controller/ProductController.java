package com.example.demo.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ProductService;
import com.example.demo.model.Product;
import com.example.demo.model.Users;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
    private ProductService ProductService;

	@GetMapping("/getProduct")
	public List<Product> list() {
	    return ProductService.listAll();
	}
	
	@GetMapping("/getallProduct")
	public List<Product> getProduct() {
	    return ProductService.GetProduct();
	}
	
	
	@GetMapping("/getProductid/{product_id}")
	public ResponseEntity<Product> get(@PathVariable Integer product_id) {
	    try {
	    	Product Users = ProductService.get(product_id);
	        return new ResponseEntity<Product>(Users, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<Product>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@PostMapping("/CreateProduct")
	public void add(@RequestBody  Product product) {
		ProductService.save(product);
	}
	
//	@PostMapping("/CreateProduct")
//	public void CreateProduct(@RequestBody Product product) {
//		ProductService.CreateProduct(product.getProduct_name(), product.getProduct_description(),
//				product.getProduct_price(), product.isProduct_status(), product.getProduct_img(),
//				product.getProduct_amount(), product.getProduct_size(), product.getProduct_color(),
//				product.getCategory_id());
//	}
	
	@PutMapping("/updateProduct/{product_id}")
	public ResponseEntity<?> update(@RequestBody Product Users, @PathVariable Integer product_id) {
	    try {
	    	Product existProduct = ProductService.get(product_id);
	    	ProductService.save(Users);
	        return new ResponseEntity<>(HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@DeleteMapping("/deleteProduct/{product_id}")
	public void delete(@PathVariable Integer product_id) {
		ProductService.delete(product_id);
	}
}
