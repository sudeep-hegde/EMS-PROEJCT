package net.project.springboot.model;

import org.springframework.stereotype.Component;

@Component
public class SignupInterClass {

private Long id;
    
    private String emailid;	
    private String password;    
    private String role;   
    private String firstName;
    private String lastName;
    
	public SignupInterClass(Long id, String emailid, String password, String role, String firstName, String lastName) {
		super();
		this.id = id;
		this.emailid = emailid;
		this.password = password;
		this.role = role;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public SignupInterClass() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
    
	
}
