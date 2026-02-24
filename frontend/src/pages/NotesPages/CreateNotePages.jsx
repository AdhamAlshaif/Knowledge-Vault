import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";
import axios from "axios";
import NotePage from "./NotePage";
import { useNavigate } from "react-router-dom";
import "./CreateNotePages.css";

const extensions = [TextStyle, StarterKit];

const CreateNoteContainer = () => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const editor = useEditor({
    extensions,
    content: '',
  });

  const handleSave = async () => {
    if (!editor || !title) {
      alert("Please enter a title.");
      return;
    }

    const content = editor.getHTML();
    await axios.post('http://localhost:8080/notes', { title, content });
    navigate('/notes-list');
  };

  return (
    <div className="create-note-page">
  
      <input
        type="text"
        placeholder="Enter title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
  
      />
      <div className="editor-tools">
        <NotePage editor={editor} />
      </div>
      <div className="editor-container">
        <EditorContent editor={editor} className="editor" />
      </div>
      <div className="save-cancel">
        <button onClick={handleSave} disabled={!title}>Save Note</button>
        <button onClick={() => navigate('/notes-list')}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateNoteContainer;