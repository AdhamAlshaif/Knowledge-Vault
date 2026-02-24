package com.adhamal.backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adhamal.backend.models.UserNote;
import com.adhamal.backend.repo.UserNoteRepository;

@Service
public class NotesService {

    @Autowired
    UserNoteRepository userNoteRepository;

    public UserNote saveNotes(UserNote notes) {
        return userNoteRepository.save(notes);
    }

    public List<UserNote> getAllNotes() {
        return userNoteRepository.findAll();
    }

    public UserNote getNoteById(Long id) {
        return userNoteRepository.findById(id).orElse(null);
    }

    public void deleteNoteById(Long id) {
        userNoteRepository.deleteById(id);
    }

}
