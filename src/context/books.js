import { createContext, useState } from "react";

const BooksContext = createContext(); // 1. Create the context

function Provider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  // 2. Specify the data that will be shared across whole application
  const valuesToShare = {
    count: count,
    increment: increment,
  };

  return (
    <BooksContext.Provider value={valuesToShare}>
      {children}
    </BooksContext.Provider>
  );
}
export { BooksContext };
export default Provider;
