import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
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
