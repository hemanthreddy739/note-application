import React from "react";
import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";
import CategoryFolder from "./CategoryFolder";

function FolderCollection() {
  const { notes } = useContext(NotesContext);

  return (
    <div style={{ display: "flex" }}>
      {notes.map((category) => (
        <CategoryFolder categoryName={category.name} />
      ))}
    </div>
  );
}

export default FolderCollection;
