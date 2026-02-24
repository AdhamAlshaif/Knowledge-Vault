package com.adhamal.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adhamal.backend.models.User;
import com.adhamal.backend.repo.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }


}
