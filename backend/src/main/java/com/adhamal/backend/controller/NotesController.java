package com.adhamal.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.adhamal.backend.models.UserNote;
import com.adhamal.backend.services.NotesService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class NotesController {

    @Autowired
    NotesService notesService;


    @PostMapping("/notes")
    public UserNote createNotes(@RequestBody UserNote notes) {
        System.out.println("Received notes: " + notes);
        return notesService.saveNotes(notes);
    }

    @GetMapping("/notes")
    public List<UserNote> getAllNotes() {
        return notesService.getAllNotes();
    }

    @GetMapping("/notes/{id}")
    public UserNote getNoteById(@PathVariable Long id) {
        return notesService.getNoteById(id);
    }

    @DeleteMapping("/notes/{id}")
    public void deleteNoteById(@PathVariable Long id) {
        notesService.deleteNoteById(id);
    }
}
