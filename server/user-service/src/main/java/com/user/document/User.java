package com.user.document;

import com.mongodb.lang.NonNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

//mention the mongodb database' collection name
@Document(collection = "users")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User {


    //properties for this user document
    @Id
    private long id;

    @Transient
    private static final String SEQUENCE_NAME = "user_service";
    private String name;

    @Indexed(unique = true)
    @NonNull
    private String email;

    private String address;

}
