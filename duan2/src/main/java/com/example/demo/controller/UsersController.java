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
import com.example.demo.Service.UsersService;
import com.example.demo.model.Users;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
	
	@Autowired
    private UsersService UsersService;
	
	@GetMapping("/getUsers")
	public List<Users> list() {
	    return UsersService.listAll();
	}
	
	@GetMapping("/getUsersAD")
	public List<Users> getUsersAD() {
		return UsersService.getUsersAD();
	}
	
	@GetMapping("/getUsersNV")
	public List<Users> getUsersNV() {
		return UsersService.getUsersNV();
	}
	
	@GetMapping("/getUsersKH")
	public List<Users> getUsersKH() {
		return UsersService.getUsersKH();
	}
	
	@GetMapping("/getUsersid/{users_id}")
	public ResponseEntity<Users> get(@PathVariable Integer users_id) {
	    try {
	    	Users Users = UsersService.get(users_id);
	        return new ResponseEntity<Users>(Users, HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<Users>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@PostMapping("/createUsers")
	public void add(@RequestBody Users Users) {
		UsersService.save(Users);
	}
	
	@PutMapping("/updateUsers/{users_id}")
	public ResponseEntity<?> update(@RequestBody Users Users, @PathVariable Integer users_id) {
	    try {
	    	Users existUsers = UsersService.get(users_id);
	        UsersService.save(Users);
	        return new ResponseEntity<>(HttpStatus.OK);
	    } catch (NoSuchElementException e) {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }      
	}
	
	@DeleteMapping("/deleteUsers/{users_id}")
	public void delete(@PathVariable Integer users_id) {
		UsersService.delete(users_id);
	}
	

}
