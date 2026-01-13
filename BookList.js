import React, { useEffect, useState } from "react";
import { API } from "../services/api";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get("/books").then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <p key={book._id}>
          {book.title} - Available: {book.available}
        </p>
      ))}
    </div>
  );
};

export default BookList;
