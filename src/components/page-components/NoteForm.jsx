import React, { useState, useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import "../../css/NoteForm.css";
import { useNavigate } from "react-router-dom";

function NoteForm() {
  const { addNote } = useContext(NotesContext);
  const [newTitle, setNewTitle] = useState("");
  const [newNote, setNewNote] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("loggedInUser");

    if (token) {
      const timestamp = new Date().toLocaleString();
      addNote({
        title: newTitle,
        content: newNote,
        date: timestamp,
        category: categoryName,
      });

      navigate("/allnotes");
    } else {
      navigate("/login");
    }

    setNewTitle("");
    setNewNote("");
    setCategoryName("");
  };

  return (
    <div className="note-form-container">
      <div className="card">
        <h2 className="form-title">Add a Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            className="input-field"
          />
          <textarea
            placeholder="Note content..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            required
            className="textarea-field"
            cols={100}
            rows={8}
          />
          <input
            type="text"
            placeholder="Category name..."
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
