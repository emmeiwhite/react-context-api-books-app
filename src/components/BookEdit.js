import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

export default function BookEdit({ id, setIsBookEdit }) {
  const { editBookById } = useBooksContext();

  const [editedBook, setEditedBook] = useState("");

  function handleSubmitEdit(e) {
    e.preventDefault();
    if (!editedBook) return;

    const updatedBook = {
      name: editedBook,
      id,
    };

    // Passing the edited book title and id as object to the Parent App where the state is defined to update it
    editBookById(updatedBook);

    // Close the edit mode on book component
    setIsBookEdit(false); // We could directly pass the setter function as well from the parent
  }
  return (
    <form onSubmit={handleSubmitEdit}>
      <h3>New Title</h3>
      <input
        type="text"
        value={editedBook}
        onChange={(e) => setEditedBook(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
