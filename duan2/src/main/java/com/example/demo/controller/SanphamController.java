package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.*;
import com.example.demo.dto.Sanpham;
import com.example.demo.repository.SanphamRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SanphamController {

	@Autowired
	private SanphamRepository SanphamRepository;
	
	@GetMapping("/getSanpham")
	public List<Sanpham> getSanpham() {
		return SanphamRepository.getSanpham();
	}
	
	@GetMapping("/getSanpham/{id}")
	public com.example.demo.model.Sanpham getSanphamId(@PathVariable(value = "id") String Product_id) {
		return SanphamRepository.getSanphamId(Product_id);
	}
	
//	@GetMapping("/searchSanpham/{id}")
//	public List<Sanpham> searchSanpham(@PathVariable(value = "id") String Product_id) {
//		return SanphamRepository.seachSanpham(Product_id);
//	}
	
	@PostMapping("/createSanpham")
	public void createSanpham(@RequestBody com.example.demo.model.Sanpham Sanpham) {
		SanphamRepository.CreateSanpham(Sanpham.getProduct_name(), Sanpham.getProduct_description(), Sanpham.getProduct_price(), Sanpham.getProduct_stock(),
				Sanpham.getProduct_amount(),Sanpham.getProduct_id(), Sanpham.isProduct_status(), 
				Sanpham.getProduct_img(), Sanpham.getCategory_name(), Sanpham.getSize_name());
	}
	
	@DeleteMapping("/Sanpham/{id}")
	public void deleteSanpham(@PathVariable(value = "id") String Product_id){
		SanphamRepository.deleteSanpham(Product_id);
	}
	
	@PutMapping("/updateSanpham")
	public void updateSanpham(@RequestBody com.example.demo.model.Sanpham Sanpham) {
		SanphamRepository.updateSanpham(Sanpham.getProduct_name(), Sanpham.getProduct_description(), Sanpham.getProduct_price(), Sanpham.getProduct_stock(),
				Sanpham.getProduct_amount(),Sanpham.getProduct_id(), Sanpham.isProduct_status(), 
				Sanpham.getProduct_img(), Sanpham.getCategory_name(), Sanpham.getSize_name());
	}
}
