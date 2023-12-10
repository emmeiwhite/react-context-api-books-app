import React, { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [bookTitle, setBookTitle] = useState("");
  function handleChange(e) {
    setBookTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!bookTitle) return;
    onCreate(bookTitle);
    setBookTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="book-name">Title</label>
          <input
            type="text"
            id="book-name"
            onChange={handleChange}
            value={bookTitle}
          />

          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}
