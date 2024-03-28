import React from "react";
import Book from "./Book";

export default function BookList({ books, deleteBookId, editBookById }) {
  const bookList = books.map((book) => (
    <Book
      {...book}
      key={book.id}
      deleteBookId={deleteBookId}
      editBookById={editBookById}
    />
  ));
  return (
    <>
      <h1>BookList</h1>
      <div className="book-list">{bookList}</div>
    </>
  );
}
