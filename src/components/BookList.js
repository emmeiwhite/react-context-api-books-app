import React from "react";
import Book from "./Book";

export default function BookList({ books, onDelete }) {
  return (
    <>
      <h1>BookList</h1>
      <div className="book-list">
        {books.map((book) => (
          <Book
            {...book}
            key={book.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
