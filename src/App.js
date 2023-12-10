import { useState } from "react";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const [books] = useState([]);

  return (
    <div className="App">
      <BookList />

      {/* Here we go */}
      <BookCreate />
    </div>
  );
}

export default App;
