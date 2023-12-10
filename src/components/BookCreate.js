import React, { useState } from "react";
import useBooksContext from "../custom-hooks/use-books-context";

export default function BookCreate() {
  const { createBook } = useBooksContext(); // Getting the method directly from the context
  const [bookTitle, setBookTitle] = useState("");
  function handleChange(e) {
    setBookTitle(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!bookTitle) return;
    createBook(bookTitle);
    setBookTitle("");
  }
  return (
    <div className="create-book">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            <label htmlFor="book-name">Title</label>
          </p>

          <input
            type="text"
            id="book-name"
            onChange={handleChange}
            value={bookTitle}
            placeholder="Enter Book title"
          />

          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}
