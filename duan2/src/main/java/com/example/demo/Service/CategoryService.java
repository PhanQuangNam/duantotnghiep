package com.example.demo.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.example.demo.model.Category;
import com.example.demo.model.Product;
import com.example.demo.repository.CategoryRepository;

@Service
@Transactional
public class CategoryService {
	
	@Autowired
	 private CategoryRepository CategoryRepository;
	
	public List<Category> listAll() {
        return CategoryRepository.findAll();
    }
	
	public void save(Category Category) {
		CategoryRepository.save(Category);
	    }
	     
	    public Category get(Integer category_id) {
	        return CategoryRepository.findById(category_id).get();
	    }
	     
	    public void delete(Integer category_id) {
	    	CategoryRepository.deleteById(category_id);
	    }
}
