package com.adhamal.backend.models;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    



    /**
     * i will skip this for now 
     * i dont get how to use auth
     * ive used supabase for auth in the frontend
     * i found out about firebase and clark but i dont know how to use them
     * im not sure how the backend should handle auth
     * im thinking of using jwt but i dont know how to implement it
     * i dont how to create the my sql data base tables when use Auth as a Service
     * (AaaS.
     */

    /**
     * so what i decided to do is to create a basic login page so i will store user data as its and when
     * user create a new post or something in my website i will store user id in this post or form and if user id
     * id in the post or form then i will allow user to edit or delete it and view it in his profile page.
     */

}
