import { useContext } from "react";
import BooksContext from "../context/books";

// Custom hook to make our code reusable!
function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
