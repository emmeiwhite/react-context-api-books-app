import { createContext, useState, useEffect } from "react";
import axios from "axios";

const BooksContext = createContext(); // 1. Create the context

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(function () {
    async function getAllBooks() {
      const response = await axios.get("http://localhost:3002/books");
      console.log(response);

      setBooks(response.data);
    }

    getAllBooks();
  }, []);

  async function createBook(book) {
    const { name } = book;

    const response = await axios.post("http://localhost:3002/books", {
      name,
    });

    setBooks([...books, response.data]);
  }

  async function deleteBookId(id) {
    await axios.delete("http://localhost:3002/books/" + id);
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  }

  async function editBookById(editedBook) {
    const { id, name } = editedBook;
    const response = await axios.put("http://localhost:3002/books/" + id, {
      name,
    });
    const editedBooks = books.map((book) =>
      book.id === editedBook.id ? { ...book, ...response.data } : book
    );

    setBooks(editedBooks);
  }

  const valuesToShare = {
    books,
    deleteBookId,
    editBookById,
    createBook,
  };
  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { BooksContext };
export default Provider;
