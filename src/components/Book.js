import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";
// import { BooksContext } from "../context/books";

export default function Book({ id, name }) {
  const { deleteBookId } = useBooksContext();

  const [isBookEdit, setIsBookEdit] = useState(false);
  return (
    <div className="book">
      <h3 className="book-title">{name}</h3>
      <div className="book-update">
        <span
          onClick={(e) => setIsBookEdit(!isBookEdit)}
          className="book-edit"
        >
          ✍️
        </span>

        <span
          onClick={() => deleteBookId(id)}
          className="book-delete"
        >
          ❌
        </span>
      </div>

      {isBookEdit && (
        <BookEdit
          id={id}
          isBookEdit={isBookEdit}
          setIsBookEdit={setIsBookEdit}
        />
      )}
    </div>
  );
}
