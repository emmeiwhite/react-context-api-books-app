import React from "react";
import { useState } from "react";

import useBooksContext from "../custom-hooks/use-books-context";

export default function BookEdit({ id, removeBookEdit }) {
  const [bookEditTitle, setBookEditTitle] = useState("");
  const { editBook } = useBooksContext();

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
