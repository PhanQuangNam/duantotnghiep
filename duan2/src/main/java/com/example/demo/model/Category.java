package com.example.demo.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "category")
public class Category {
	@Id
	@Column(length = 50)
	private String Category_name;
	private String Category_id;
	
	@OneToMany(targetEntity = Sanpham.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "Category_name", referencedColumnName = "Category_name")
	private List<Sanpham> sanphams;
	
	public Category() {}
	
	public Category(String category_id, String category_name, List<Sanpham> sanphams) {
		super();
		Category_id = category_id;
		Category_name = category_name;
		this.sanphams = sanphams;
	}
	public String getCategory_id() {
		return Category_id;
	}
	public void setCategory_id(String category_id) {
		Category_id = category_id;
	}
	public String getCategory_name() {
		return Category_name;
	}
	public void setCategory_name(String category_name) {
		Category_name = category_name;
	}
	public List<Sanpham> getSanphams() {
		return sanphams;
	}
	public void setSanphams(List<Sanpham> sanphams) {
		this.sanphams = sanphams;
	}
	
	
}
