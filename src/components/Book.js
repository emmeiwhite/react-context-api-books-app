import React from "react";

export default function Book({ id, title, onDelete }) {
  return (
    <div className="book">
      <h3 className="book-title">{title}</h3>
      <form className="book-update">
        <button onClick={() => onDelete(id)}>Delete Book</button>
        <button>Edit Book</button>
      </form>
    </div>
  );
}
