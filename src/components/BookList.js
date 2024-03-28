import React from "react";
import Book from "./Book";

export default function BookList() {
  return (
    <>
      <h1>BookList</h1>
      <div className="book-list">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </>
  );
}
