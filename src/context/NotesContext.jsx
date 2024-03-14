// context/NotesContext.js
import React, { createContext, useState, useEffect } from "react";

import data from "../data/NoteData.json";

export const NotesContext = createContext();

const sampleNotesData = data;

const NotesContextInfo = ({ children }) => {
  // Retrieve notes from local storage or use the sample data
  const [notes, setNotes] = useState(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    return storedNotes || sampleNotesData;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    const noteWithId = { ...newNote, id: Date.now().toString() };
    setNotes((prevNotes) => {
      const categoryIndex = prevNotes.findIndex(
        (category) => category.name === newNote.category
      );
      if (categoryIndex !== -1) {
        const updatedNotes = [...prevNotes];
        updatedNotes[categoryIndex].notes.push(noteWithId);
        return updatedNotes;
      } else {
        return [...prevNotes, { name: newNote.category, notes: [noteWithId] }];
      }
    });
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.map((category) => {
      const updatedCategory = { ...category };
      updatedCategory.notes = updatedCategory.notes.filter(
        (note) => note.id !== id
      );
      return updatedCategory;
    });
    setNotes(updatedNotes);
  };

  const updateNote = (id, updatedNote) => {
    const timestamp = new Date().toLocaleString();

    const updatedNotes = notes.map((category) => {
      const updatedCategory = { ...category };
      updatedCategory.notes = updatedCategory.notes.map((note) => {
        if (note.id === id) {
          return { ...note, ...updatedNote, date: timestamp };
        }
        return note;
      });
      return updatedCategory;
    });
    setNotes(updatedNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        deleteNote,
        updateNote,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextInfo;
