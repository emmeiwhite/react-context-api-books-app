import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  // function as prop to add the title [C of CRUD]
  function createBook(title) {
    setBooks([...books, { id: new Date().toISOString(), title }]);
  }

  // deleting the item [D of CRUD] --- again passing the function as props
  function deleteBook(id) {
    setBooks((PrevBooks) => {
      return PrevBooks.filter((bk) => bk.id !== id);
    });
  }

  return (
    <div className="App">
      {/* BookList Component */}
      <BookList
        books={books}
        onDelete={deleteBook}
      />

      {/* Here we go */}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
