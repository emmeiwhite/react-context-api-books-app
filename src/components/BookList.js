import React from "react";
import Book from "./Book";

export default function BookList({ books }) {
  return (
    <>
      <h1>BookList</h1>
      <div className="book-list">
        {books.map((book) => (
          <Book
            {...book}
            key={book.id}
          />
        ))}
      </div>
    </>
  );
}
