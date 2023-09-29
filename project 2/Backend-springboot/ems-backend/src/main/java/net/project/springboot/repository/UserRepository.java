package net.project.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.project.springboot.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmailid(String emailid);

}
