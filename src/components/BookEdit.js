import React from "react";
import { useState, useContext } from "react";
import BooksContext from "../context/books";

export default function BookEdit({ id, removeBookEdit }) {
  const [bookEditTitle, setBookEditTitle] = useState("");
  const { editBook } = useContext(BooksContext);

  function handleEditLocal() {
    if (!bookEditTitle) return;
    editBook(id, bookEditTitle);
    setBookEditTitle("");
    removeBookEdit();
  }

  return (
    <div>
      <div className="form-group">
        <p>
          <label htmlFor="book-name">TITLE</label>
        </p>

        <form onSubmit={handleEditLocal}>
          <input
            type="text"
            id="book-name"
            onChange={(e) => setBookEditTitle(e.target.value)}
            value={bookEditTitle}
            placeholder="Edit Book title"
          />

          <button>Save</button>
        </form>
      </div>
    </div>
  );
}
