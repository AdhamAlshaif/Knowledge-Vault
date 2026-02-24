package com.adhamal.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adhamal.backend.models.UserNote;

@Repository
public interface NotesRepository extends JpaRepository<UserNote, Long> {
}
