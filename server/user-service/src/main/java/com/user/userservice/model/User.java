package com.user.userservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "authenticationApp")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
}
