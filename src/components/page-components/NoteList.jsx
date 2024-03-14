// components/NoteList.js
import React from "react";
import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import { useParams } from "react-router-dom";
import NoteItem from "./NoteItem";
import "../../css/NoteList.css";
import SearchBar from "./SearchBar";

function NoteList() {
  const { notes, searchTerm } = useContext(NotesContext);
  const { categoryName } = useParams();
  
  // filtering the notes

  const filteredNotes = notes.filter((category) => {
    // Filter notes based on category name and search term
    return (
      category.name === categoryName &&
      category.notes.some((note) =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  return (
    <div className="NoteListWrapper" >
      <SearchBar searchIn={categoryName} />
      <div className="note-list">
        {filteredNotes.map((category) => (
          <div key={category.name} className="category">
            <div className="notes">
              {category.notes
                .filter((note) =>
                  note.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((note) => (
                  <NoteItem key={note.id} note={note} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
