import React, { useEffect, useState } from "react";

import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 place-items-center">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
