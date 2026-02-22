import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoteItem from "../NoteItem";
import { NotesContext } from "../../../context/NotesContext";

const mockDelete = jest.fn();
const mockUpdate = jest.fn();

const renderWithContext = (note) =>
  render(
    <NotesContext.Provider value={{ deleteNote: mockDelete, updateNote: mockUpdate }}>
      <NoteItem note={note} />
    </NotesContext.Provider>
  );

describe("NoteItem", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders title and content and supports edit/save/delete", () => {
    const note = { id: 1, title: "Test Title", content: "Test Content", date: "2026-02-22" };
    renderWithContext(note);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    // enter edit mode
    fireEvent.click(screen.getByText(/Edit/i));
    const titleInput = screen.getByDisplayValue("Test Title");
    fireEvent.change(titleInput, { target: { value: "New Title" } });

    // save
    fireEvent.click(screen.getByText(/Save/i));
    expect(mockUpdate).toHaveBeenCalledWith(1, { title: "New Title", content: "Test Content" });

    // delete
    fireEvent.click(screen.getByText(/Delete/i));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
