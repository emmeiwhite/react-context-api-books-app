import React, { useState } from "react";

import BookEdit from "./BookEdit";
import useBooksContext from "../custom-hooks/use-books-context";

export default function Book({ id, title }) {
  const [isEdit, setIsEdit] = useState(false);

  const { deleteBook } = useBooksContext();

  // function as prop to update isEdit state in the child BookEdit Component
  function showBookEdit() {
    setIsEdit(true);
  }

  function removeBookEdit() {
    setIsEdit(false);
  }

  return (
    <div className="book">
      {/* We are going to either show title or book edit component, 
      that's why we require a component level state to handle this */}

      {isEdit ? (
        <BookEdit
          id={id}
          removeBookEdit={removeBookEdit}
        />
      ) : (
        <div className="book-content">
          <img
            src={`https://picsum.photos/seed/${id}/300/200`}
            alt={title}
          />
          <h3 className="book-title">{title}</h3>
          <button onClick={() => deleteBook(id)}>Delete Book</button>
          <button
            type="button"
            onClick={showBookEdit}
          >
            Edit Book
          </button>
        </div>
      )}
    </div>
  );
}
