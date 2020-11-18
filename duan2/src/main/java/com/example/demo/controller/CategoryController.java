package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Service.CategoryService;
import com.example.demo.model.Category;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	@Autowired
	private CategoryService CategoryService;
	
	@GetMapping("/getCategory")
	public List<Category> getCategory() {
		return CategoryService.listAll();
	}
	
}
