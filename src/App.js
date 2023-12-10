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

  // editing the item [U of CRUD] --- again passing the function as props, lots of prop-drilling in action
  function editBook(id, title) {
    setBooks((PrevBooks) => {
      return PrevBooks.map((bk) => {
        if (bk.id === id) {
          return { ...bk, title };
        }

        return bk;
      });
    });
  }

  return (
    <div className="App">
      {/* BookList Component */}
      <BookList
        books={books}
        onDelete={deleteBook}
        onEdit={editBook}
      />

      {/* Here we go */}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
