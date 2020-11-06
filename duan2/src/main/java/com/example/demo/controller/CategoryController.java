package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Category;
import com.example.demo.repository.CategoryRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	@Autowired
	private CategoryRepository CategoryRepository;
	
	@GetMapping("/getCategory")
	public List<Category> getSanpham() {
		return CategoryRepository.getCategory();
	}
}
