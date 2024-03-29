import React, { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../context/books";

export default function BookList({ books, deleteBookId, editBookById }) {
  // 3. Step-3: Consume the data (from the context) in the component
  const { count, increment } = useContext(BooksContext);
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
      <h2>Book Count From the Context is:{count}</h2>

      <button onClick={increment}>increment count</button>
      <div className="book-list">{bookList}</div>
    </>
  );
}
