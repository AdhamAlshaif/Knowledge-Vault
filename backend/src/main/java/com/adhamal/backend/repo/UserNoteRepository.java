package com.adhamal.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adhamal.backend.models.UserNote;

public interface UserNoteRepository extends JpaRepository<UserNote, Long> {

}
