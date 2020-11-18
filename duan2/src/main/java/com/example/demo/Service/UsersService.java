package com.example.demo.Service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import javax.transaction.Transactional;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UsersRepository;

@Service
@Transactional
public class UsersService {

	 @Autowired
	 private UsersRepository UsersRepository;	 
	 
	 @Autowired
	JdbcTemplate jdbcTemplate;
	 
	 public List<Users> listAll() {
	        return UsersRepository.findAll();
	    }
	 
	 public List<Users> getUsersAD() {
			String sql = "select Users_id , Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,\r\n" + 
					"Users_account , Users_sex from users where Users_roll ='AD'";
			return jdbcTemplate.query(sql, new RowMapper<Users>() {
				public Users mapRow(ResultSet rs, int rownumber) throws SQLException {
					Users us = new Users();
					us.setUsers_id(rs.getInt(1));
					us.setUsers_first_name(rs.getString(2));
					us.setUsers_last_name(rs.getString(3));
					us.setUsers_address(rs.getString(4));
					us.setUsers_phone(rs.getString(5));
					us.setUsers_password(rs.getString(6));
					us.setUsers_roll(rs.getString(7));
					us.setUsers_img(rs.getString(8));
					us.setUsers_email(rs.getString(9));
					us.setUsers_account(rs.getString(10));
					us.setUsers_sex(rs.getString(11));
					return us;
				}
			});
		}
	 
	 public List<Users> getUsersNV() {
			String sql = "select Users_id , Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,\r\n" + 
					"Users_account , Users_sex from users where Users_roll ='NV'";
			return jdbcTemplate.query(sql, new RowMapper<Users>() {
				public Users mapRow(ResultSet rs, int rownumber) throws SQLException {
					Users us = new Users();
					us.setUsers_id(rs.getInt(1));
					us.setUsers_first_name(rs.getString(2));
					us.setUsers_last_name(rs.getString(3));
					us.setUsers_address(rs.getString(4));
					us.setUsers_phone(rs.getString(5));
					us.setUsers_password(rs.getString(6));
					us.setUsers_roll(rs.getString(7));
					us.setUsers_img(rs.getString(8));
					us.setUsers_email(rs.getString(9));
					us.setUsers_account(rs.getString(10));
					us.setUsers_sex(rs.getString(11));
					return us;
				}
			});
		}
		
		public List<Users> getUsersKH() {
			String sql = "select Users_id , Users_first_name , Users_last_name , Users_address , Users_phone , Users_password , Users_roll , Users_img , Users_email,\r\n" + 
					"Users_account , Users_sex from users where Users_roll ='ND'";
			return jdbcTemplate.query(sql, new RowMapper<Users>() {
				public Users mapRow(ResultSet rs, int rownumber) throws SQLException {
					Users us = new Users();
					us.setUsers_id(rs.getInt(1));
					us.setUsers_first_name(rs.getString(2));
					us.setUsers_last_name(rs.getString(3));
					us.setUsers_address(rs.getString(4));
					us.setUsers_phone(rs.getString(5));
					us.setUsers_password(rs.getString(6));
					us.setUsers_roll(rs.getString(7));
					us.setUsers_img(rs.getString(8));
					us.setUsers_email(rs.getString(9));
					us.setUsers_account(rs.getString(10));
					us.setUsers_sex(rs.getString(11));
					return us;
				}
			});
		}
	     
	    public void save(Users Users) {
	    	UsersRepository.save(Users);
	    }
	     
	    public Users get(Integer users_id) {
	        return UsersRepository.findById(users_id).get();
	    }
	     
	    public void delete(Integer users_id) {
	    	UsersRepository.deleteById(users_id);
	    }
}
