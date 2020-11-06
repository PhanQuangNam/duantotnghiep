package com.example.demo.dto;

public class Size {
	private String Size_id;
	private String Size_name;
	
	public Size() {}
	
	public Size(String size_id, String size_name) {
		super();
		Size_id = size_id;
		Size_name = size_name;
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
	
	
}
