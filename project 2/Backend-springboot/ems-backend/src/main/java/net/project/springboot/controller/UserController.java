package net.project.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.project.springboot.model.Employee;
import net.project.springboot.model.SignupInterClass;
import net.project.springboot.model.User;
import net.project.springboot.repository.EmployeeRepository;
import net.project.springboot.repository.UserRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class UserController {
	@Autowired
    private UserRepository userRepository;
	
	@Autowired
    private EmployeeRepository employeeRepository;
	
	
	@GetMapping
	@RequestMapping("/log")
    public List<User> getAllEmployees(){
        return userRepository.findAll();
    }
	

    @PostMapping
    @RequestMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // Find the user by email
        User storedUser = userRepository.findByEmailid(user.getEmailid());

        if (storedUser == null) {
            return ResponseEntity.badRequest().body("User not found.");
        }

        // Check if the password matches
        if (!storedUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.badRequest().body("Incorrect password.");
        }

        // Return a success message or a token for authentication
        return ResponseEntity.ok("Login successful.");
    }
    
    @PostMapping
	@RequestMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupInterClass user) {
        // Check if the username is already taken
        if (userRepository.findByEmailid(user.getEmailid()) != null) {
            return ResponseEntity.badRequest().body("Username is already taken.");
        }

        // Set the user role to 'employee' for signup
        User user1=new User();
        user1.setEmailid(user.getEmailid());
        user1.setPassword(user.getPassword());
        user1.setRole("employee");
        
        
        Employee emp=new Employee();
        emp.setEmailId(user.getEmailid());
        emp.setFirstName(user.getFirstName());
        emp.setLastName(user.getLastName());
        

        // Save the user to the database
        
        userRepository.save(user1);
        employeeRepository.save(emp);

        return ResponseEntity.ok("Signup successful.");
    }
    
    

}
