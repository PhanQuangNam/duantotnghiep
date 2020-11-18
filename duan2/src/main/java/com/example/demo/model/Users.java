package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Users {

	@Id
	private int users_id;
	private String users_first_name;
	private String users_last_name;
	private String users_address;
	private String users_phone;
	private String users_password;
	private String users_roll;
	private String users_img;
	private String users_email;
	private String users_sex;
	private String users_account;
	
	public Users(){
		
	}
	

	public Users(int users_id, String users_first_name, String users_last_name, String users_address,
			String users_phone, String users_password, String users_roll, String users_img, String users_email,
			String users_sex, String users_account) {
		super();
		this.users_id = users_id;
		this.users_first_name = users_first_name;
		this.users_last_name = users_last_name;
		this.users_address = users_address;
		this.users_phone = users_phone;
		this.users_password = users_password;
		this.users_roll = users_roll;
		this.users_img = users_img;
		this.users_email = users_email;
		this.users_sex = users_sex;
		this.users_account = users_account;
	}


	public int getUsers_id() {
		return users_id;
	}

	public void setUsers_id(int users_id) {
		this.users_id = users_id;
	}

	public String getUsers_first_name() {
		return users_first_name;
	}

	public void setUsers_first_name(String users_first_name) {
		this.users_first_name = users_first_name;
	}

	public String getUsers_last_name() {
		return users_last_name;
	}

	public void setUsers_last_name(String users_last_name) {
		this.users_last_name = users_last_name;
	}

	public String getUsers_address() {
		return users_address;
	}

	public void setUsers_address(String users_address) {
		this.users_address = users_address;
	}

	public String getUsers_phone() {
		return users_phone;
	}

	public void setUsers_phone(String users_phone) {
		this.users_phone = users_phone;
	}

	public String getUsers_password() {
		return users_password;
	}

	public void setUsers_password(String users_password) {
		this.users_password = users_password;
	}

	public String getUsers_roll() {
		return users_roll;
	}

	public void setUsers_roll(String users_roll) {
		this.users_roll = users_roll;
	}

	public String getUsers_img() {
		return users_img;
	}

	public void setUsers_img(String users_img) {
		this.users_img = users_img;
	}

	public String getUsers_email() {
		return users_email;
	}

	public void setUsers_email(String users_email) {
		this.users_email = users_email;
	}

	public String getUsers_sex() {
		return users_sex;
	}

	public void setUsers_sex(String users_sex) {
		this.users_sex = users_sex;
	}

	public String getUsers_account() {
		return users_account;
	}

	public void setUsers_account(String users_account) {
		this.users_account = users_account;
	}
	
	

}