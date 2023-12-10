import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  // function as prop to add the title [C of CRUD]
  async function createBook(title) {
    /** 1) Before we re-render out UI with a state changes, let's first save the new book in our database */

    const response = await axios.post("http://127.0.0.1:3001/books", {
      title,
    });

    setBooks([...books, response.data]);
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
