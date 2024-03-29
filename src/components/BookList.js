import React from "react";
import Book from "./Book";
import useBooksContext from "../hooks/use-books-context";

export default function BookList() {
  const { books } = useBooksContext();
  const bookList = books?.map((book) => (
    <Book
      {...book}
      key={book.id}
    />
  ));
  return (
    <>
      <h1>Book List App</h1>
      <div className="book-list">{bookList}</div>
    </>
  );
}
