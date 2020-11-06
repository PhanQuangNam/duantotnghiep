package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.Category;
import com.example.demo.dto.Size;

@Repository
public class CategoryRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;

	public List<Category> getCategory(){
		String sql ="select Category_id , Category_name ,Category_type , Category_create_time, Category_update_time "
				+ "from category;";
		return jdbcTemplate.query(sql, new RowMapper<Category>(){
			public Category mapRow (ResultSet rs , int rownumber) throws SQLException {
				Category c = new Category();
				c.setCategory_id(rs.getString(1));
				c.setCategory_name(rs.getString(2));
				return c;
			}
		});
	}
}
