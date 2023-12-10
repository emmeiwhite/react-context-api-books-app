import React from "react";

export default function Book({ id, title }) {
  return (
    <div className="book">
      <h3>{title}</h3>
      <form>
        <button type="submit">Edit Book</button>
      </form>
    </div>
  );
}
