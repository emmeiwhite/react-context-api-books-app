import React, { useState } from "react";

export default function BookEdit({ editBookById, id, setIsBookEdit }) {
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
      <h2>Title</h2>
      <input
        type="text"
        value={editedBook}
        onChange={(e) => setEditedBook(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
