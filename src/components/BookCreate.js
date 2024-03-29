import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookCreate() {
  const { createBook } = useBooksContext();
  const [bookName, setBookName] = useState("");

  function handleBookSubmit(e) {
    e.preventDefault();
    console.log(`Book Submitted: ${bookName}`);

    if (!bookName) return;

    const book = {
      name: bookName,
    };

    createBook(book);
    setBookName("");
  }
  return (
    <form
      onSubmit={handleBookSubmit}
      className="create-book"
    >
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}
