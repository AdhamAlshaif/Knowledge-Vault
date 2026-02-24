package com.adhamal.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adhamal.backend.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
