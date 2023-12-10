import React, { useContext } from "react";
import BooksContext from "../context/books";
import Book from "./Book";

export default function BookList() {
  const { books } = useContext(BooksContext);
  // Getting books from the Context & then passing to the Children as props
  // Props & Context Together
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
