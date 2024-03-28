import React, { useState } from "react";
import BookEdit from "./BookEdit";

export default function Book({ id, name, deleteBookId, editBookById }) {
  // EditForm Component is required to Edit the BookTitle, but we need to conditionally render that UI from here

  const [isBookEdit, setIsBookEdit] = useState(false);
  return (
    <div className="book">
      <h3 className="book-title">{name}</h3>
      <div className="book-update">
        <span
          onClick={(e) => setIsBookEdit(true)}
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
          editBookById={editBookById}
          id={id}
          isBookEdit={isBookEdit}
          setIsBookEdit={setIsBookEdit}
        />
      )}
    </div>
  );
}
