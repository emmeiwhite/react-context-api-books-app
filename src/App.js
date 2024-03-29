import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // 0. We need to get all the books in the db.json file (api when the application starts)

  useEffect(function () {
    async function getAllBooks() {
      const response = await axios.get("http://localhost:3002/books");
      console.log(response);

      setBooks(response.data);
    }

    getAllBooks();
  }, []);

  // 1. function createBook passing to the BookCreate to get the book submitted
  async function createBook(book) {
    const { name } = book;

    const response = await axios.post("http://localhost:3002/books", {
      name,
    });

    setBooks([...books, response.data]);

    /*
    console.log(book);
    setBooks([...books, book]);
    */
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
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
