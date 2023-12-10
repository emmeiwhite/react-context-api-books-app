import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);
  // here we'll add all our components Global state and our Business Logic
  async function fetchBooks() {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  }
  // function as prop to add the title [C of CRUD]
  async function createBook(title) {
    /** 1) Before we re-render out UI with a state changes, let's first save the new book in our database */

    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks([...books, response.data]);
  }

  // deleting the item [D of CRUD] --- again passing the function as props
  async function deleteBook(id) {
    const response = await axios.delete("http://localhost:3001/books/" + id);

    setBooks((prevBooks) => {
      return prevBooks.filter((bk) => bk.id !== id);
    });
  }

  // editing the item [U of CRUD] --- again passing the function as props, lots of prop-drilling in action
  async function editBook(id, title) {
    /** --- Editing the book details --- */
    const response = await axios.put("http://localhost:3001/books/" + id, {
      title,
    });

    setBooks((PrevBooks) => {
      return PrevBooks.map((bk) => {
        if (bk.id === id) {
          return { ...bk, ...response.data };
        }

        return bk;
      });
    });
  }

  const valuesToShare = {
    books,
    createBook,
    deleteBook,
    editBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;
export { Provider };
