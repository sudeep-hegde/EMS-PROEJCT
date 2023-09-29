package net.project.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import net.project.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
	@Query("SELECT e FROM Employee e WHERE lower(e.firstName) LIKE %:name% OR lower(e.lastName) LIKE %:name%")
    List<Employee> searchEmployees(@Param("name") String name);
}


