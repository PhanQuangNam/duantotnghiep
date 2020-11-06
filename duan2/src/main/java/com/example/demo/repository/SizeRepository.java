package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.Size;

@Repository
public class SizeRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Size> getSize(){
		String sql ="select Size_id, Size_name from size";
		return jdbcTemplate.query(sql, new RowMapper<Size>(){
			public Size mapRow (ResultSet rs , int rownumber) throws SQLException {
				Size s = new Size();
				s.setSize_id(rs.getString(1));
				s.setSize_name(rs.getString(2));
				return s;
			}
		});
	}
}
