import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  // 1. function addBook passing to the BookCreate to get the book submitted

  function addBook(book) {
    console.log(book);
    setBooks([...books, book]);
  }

  function deleteBookId(id) {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  function editBookById(editedBook) {
    console.log(editedBook);
    const editedBooks = books.map((book) =>
      book.id === editedBook.id ? { ...book, name: editedBook.name } : book
    );

    setBooks(editedBooks);
  }

  return (
    <div className="App">
      {/* BookList Component */}
      <BookList
        books={books}
        deleteBookId={deleteBookId}
        editBookById={editBookById}
      />

      {/* Here we go */}
      <BookCreate addBook={addBook} />
    </div>
  );
}

export default App;
