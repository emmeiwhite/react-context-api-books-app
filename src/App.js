import { useEffect, useContext } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";
import BooksContext from "./context/books";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="App">
      {/* BookList Component */}
      <BookList />

      {/* Here we go */}
      <BookCreate />
    </div>
  );
}

export default App;
