// components/NoteItem.js
import React, { useContext, useState } from "react";
import { NotesContext } from "../../context/NotesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import "../../css/NoteItem.css";

function NoteItem({ note }) {
  const { deleteNote, updateNote } = useContext(NotesContext);
  const [editMode, setEditMode] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [editedTitle, setEditedTitle] = useState("");

  const handleUpdateNote = (id) => {
    updateNote(id, { title: editedTitle, content: editedContent });
    setEditMode(false);
  };

  const handleEdit = (noteTitle, noteContent) => {
    setEditedTitle(noteTitle);
    setEditedContent(noteContent);
    setEditMode(true);
  };

  return (
    <div className="note-item">
      <div className="note-content">
        <h3 className="NoteTitle">
          {editMode ? (
            <input
              className="note-title-input"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          ) : (
            note.title
          )}
        </h3>
        {editMode ? (
          <textarea
            className="note-content-textarea"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p className="NoteContent">{note.content}</p>
        )}
      </div>

      <div className="note-actions">
        {editMode ? (
          <button onClick={() => handleUpdateNote(note.id)}>
            Save <FontAwesomeIcon icon={faSave} />
          </button>
        ) : (
          <button onClick={() => handleEdit(note.title, note.content)}>
            Edit <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
        <button className="delete-button" onClick={() => deleteNote(note.id)}>
          Delete <FontAwesomeIcon icon={faTrash} />
        </button>

        <div className="note-date">{note.date}</div>
      </div>
    </div>
  );
}

export default NoteItem;
