import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function BookCreate({ addBook }) {
  const [bookName, setBookName] = useState("");

  function handleBookSubmit(e) {
    e.preventDefault();
    console.log(`Book Submitted: ${bookName}`);

    // We need to add this book to the parent component, with id

    if (!bookName) return;

    const book = {
      name: bookName,
      id: uuidv4(),
    };

    // Passing book to the parent to be added to the list of books
    addBook(book);
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
