import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  //   const book = books.find((b) => b.bookId === parseInt(bookId));
  //   console.log(book);
  console.log(books, bookId);
  return (
    <div>
      <h1>details of book </h1>
    </div>
  );
};

export default BookDetails;
