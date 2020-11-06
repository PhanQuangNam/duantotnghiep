package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.Size;
import com.example.demo.repository.SizeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SizeController {
	@Autowired
	private SizeRepository SizeRepository;
	
	@GetMapping("/getSize")
	public List<Size> getSanpham() {
		return SizeRepository.getSize();
	}
}
