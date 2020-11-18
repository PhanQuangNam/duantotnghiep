package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Product {
	
	@Id
	private int product_id;
	private String product_name;
	private String product_description;
	private int product_price;
	private boolean product_status;
	private String product_img;
	private int product_amount;
	private String product_size;
	private String product_color;
	private int category_id;
	private String category_name;
	
	public Product() {}
	
	



	public Product(int product_id, String product_name, String product_description, int product_price,
			boolean product_status, String product_img, int product_amount, String product_size, String product_color,
			int category_id, String category_name) {
		super();
		this.product_id = product_id;
		this.product_name = product_name;
		this.product_description = product_description;
		this.product_price = product_price;
		this.product_status = product_status;
		this.product_img = product_img;
		this.product_amount = product_amount;
		this.product_size = product_size;
		this.product_color = product_color;
		this.category_id = category_id;
		this.category_name = category_name;
	}

	public int getProduct_id() {
		return product_id;
	}

	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}

	public String getProduct_name() {
		return product_name;
	}

	public void setProduct_name(String product_name) {
		this.product_name = product_name;
	}

	public String getProduct_description() {
		return product_description;
	}

	public void setProduct_description(String product_description) {
		this.product_description = product_description;
	}

	public int getProduct_price() {
		return product_price;
	}

	public void setProduct_price(int product_price) {
		this.product_price = product_price;
	}

	public boolean isProduct_status() {
		return product_status;
	}

	public void setProduct_status(boolean product_status) {
		this.product_status = product_status;
	}

	public String getProduct_img() {
		return product_img;
	}

	public void setProduct_img(String product_img) {
		this.product_img = product_img;
	}

	public int getProduct_amount() {
		return product_amount;
	}

	public void setProduct_amount(int product_amount) {
		this.product_amount = product_amount;
	}

	public String getProduct_size() {
		return product_size;
	}

	public void setProduct_size(String product_size) {
		this.product_size = product_size;
	}

	public String getProduct_color() {
		return product_color;
	}

	public void setProduct_color(String product_color) {
		this.product_color = product_color;
	}

	public int getCategory_id() {
		return category_id;
	}

	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}

	public String getCategory_name() {
		return category_name;
	}

	public void setCategory_name(String category_name) {
		this.category_name = category_name;
	}
	
	
	
}
