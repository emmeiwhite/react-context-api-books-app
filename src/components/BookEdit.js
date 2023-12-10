import React from "react";
import { useState } from "react";

export default function BookEdit({ onEdit, id, removeBookEdit }) {
  const [bookEditTitle, setBookEditTitle] = useState("");

  function handleEditLocal() {
    if (!bookEditTitle) return;
    onEdit(id, bookEditTitle);
    setBookEditTitle("");
    removeBookEdit();
  }

  return (
    <div>
      <div className="form-group">
        <p>
          <label htmlFor="book-name">Title</label>
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
