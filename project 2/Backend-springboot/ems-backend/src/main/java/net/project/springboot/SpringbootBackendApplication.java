package net.project.springboot;

//import net.project.springboot.model.Employee;
//import net.project.springboot.model.User;
//import net.project.springboot.repository.EmployeeRepository;
//import net.project.springboot.repository.UserRepository;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

//	@Autowired
//	private EmployeeRepository employeeRepository;
	
//	@Autowired
//	private UserRepository userRepo;

	@Override
	public void run(String... args) throws Exception {
//		Employee employee = new Employee();
//		employee.setFirstName("Ramesh");
//		employee.setLastName("Fadatare");
//		employee.setEmailId("ramesh@gmail.com");
//		employeeRepository.save(employee);
//		
//		User user=new User();
//		user.setEmailid("ramesh@gmail.com");
//		user.setPassword("password");
//		user.setRole("employee");
//		userRepo.save(user);
//		
//
//		Employee employee1 = new Employee();
//		employee1.setFirstName("John");
//		employee1.setLastName("Cena");
//		employee1.setEmailId("cena@gmail.com");
//		employeeRepository.save(employee1);
//		
//		User user1=new User();
//		user1.setEmailid("ramesh@gmail.com");
//		user1.setPassword("password");
//		user1.setRole("employee");
//		userRepo.save(user1);
	}
}
