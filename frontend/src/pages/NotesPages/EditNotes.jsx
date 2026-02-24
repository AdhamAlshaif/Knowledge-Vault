import { TextStyle } from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import NotePage from "./NotePage";
import "./EditNotes.css";


const extensions = [TextStyle, StarterKit];

function EditNotes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const editor = useEditor({
    extensions,
    content: '',
  });

  useEffect(() => {
    if (editor) {
      const fetchNote = async () => {
        const response = await axios.get(`http://localhost:8080/notes/${id}`);
        editor.commands.setContent(response.data.content);
      };
      fetchNote();
    }
  }, [id, editor]);

  const handleSave = async () => {
    const content = editor.getHTML();
    await axios.put(`http://localhost:8080/notes/${id}`, { content });
    navigate('/notes-list');
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:8080/notes/${id}`);
      navigate('/notes-list');
    }
  };

  return (
    <div>
      <NotePage editor={editor} />
      <div className="editor-container">
        <EditorContent editor={editor} />
      </div>
      <div className="editor-buttons">
      <button onClick={() => navigate('/notes-list')}>Back</button>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default EditNotes;