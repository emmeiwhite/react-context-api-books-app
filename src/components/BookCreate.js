import React, { useState } from "react";

export default function BookCreate() {
  const [bookTitle, setBookTitle] = useState("");
  function handleChange(e) {
    setBookTitle(e.target.value);
  }
  function handleSubmit() {}
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
