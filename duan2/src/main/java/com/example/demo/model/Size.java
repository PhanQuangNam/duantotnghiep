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
@Table(name ="size" )
public class Size {
	@Id
	@Column(length = 50)
	private String Size_name;
	private String Size_id;
	@OneToMany(targetEntity = Sanpham.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "Size_name", referencedColumnName = "Size_name")
	private List<Sanpham> sanphams;
	
	public Size() {}
	
	public Size(String size_id, String size_name, List<Sanpham> sanphams) {
		super();
		Size_id = size_id;
		Size_name = size_name;
		this.sanphams = sanphams;
	}
	public String getSize_id() {
		return Size_id;
	}
	public void setSize_id(String size_id) {
		Size_id = size_id;
	}
	public String getSize_name() {
		return Size_name;
	}
	public void setSize_name(String size_name) {
		Size_name = size_name;
	}
	public List<Sanpham> getSanphams() {
		return sanphams;
	}
	public void setSanphams(List<Sanpham> sanphams) {
		this.sanphams = sanphams;
	}
	
	
}
