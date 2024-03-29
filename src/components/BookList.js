import React, { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../context/books";

export default function BookList() {
  const { books } = useContext(BooksContext);
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
