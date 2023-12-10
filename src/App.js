import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  // function as prop to add the title
  function createBook(title) {
    setBooks([...books, { id: new Date().toISOString(), title }]);
  }

  return (
    <div className="App">
      {/* BookList Component */}
      <BookList books={books} />

      {/* Here we go */}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
