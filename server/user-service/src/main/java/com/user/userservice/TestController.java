package com.user.userservice;

import com.user.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/check")
    public String checkMongoConnection() {
        // Check database connection by performing a test operation
        long count = userRepository.count();
        return "MongoDB is connected! Total Users: " + count;
    }
}
