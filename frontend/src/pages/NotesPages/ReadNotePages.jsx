import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import "./ReadNotePages.css";

function ReadNotePages() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get("http://localhost:8080/notes");
      setNotes(response.data);
    };

    fetchNotes();
  }, []);
  return (
    <div className="notes-page">

      <div className="top-section">
      <h2>Recent Notes</h2>
      <button onClick={() => navigate("/create-note")}>
        <IoAdd className="icon-button"/>
      </button>
      </div>

      <div>
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => navigate(`/note/view/${note.id}`)}
            className="all-notes"
          >
            <div className="note-title">
              <h3>{note.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ReadNotePages;
