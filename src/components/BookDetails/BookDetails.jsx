import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveBookToLS } from "../../utils/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((b) => b.bookId === bookIdInt);

  const {
    bookName,
    author,
    image,
    review,
    rating,
    publisher,
    category,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  const handleRead = (book, type) => {
    saveBookToLS(book, type);
  };

  const handleWishlist = (book, type) => {
    saveBookToLS(book, type);
  };

  return (
    <div className="">
      <div className="px-6 py-4 mx-auto bg-white p-6 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center bg-gray-100 p-6">
            <img src={image} className="w-full h-[500px] max-w-xs " alt="" />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">{bookName}</h1>
            <p className="text-gray-600 mb-2">By : {author}</p>
            <p className="text-gray-500">{category}</p>
            <div className="my-4">
              <h2 className="font-semibold">Review :</h2>
              <p className="text-gray-700">{review}</p>
            </div>
            <div className="flex flex-wrap gap-x-2 mb-4">
              {tags.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-opacity-reduced font-semibold text-[#071952] px-4 py-1 rounded-full"
                >
                  #{t}
                </span>
              ))}
            </div>
            <div className="text-gray-700 mb-4">
              <p>
                <span className="font-semibold">Number of Pages : </span>
                {totalPages}
              </p>
              <p>
                <span className="font-semibold">Publisher:</span> {publisher}
              </p>
              <p>
                <span className="font-semibold">Year of Publishing:</span>{" "}
                {yearOfPublishing}
              </p>
              <p>
                <span className="font-semibold">Rating:</span> {rating}
              </p>
            </div>
            <div className="flex">
              <button
                onClick={() => handleRead(book, "read")}
                className="btn btn-outline hover:bg-[#34495e] font-semibold py-2 px-6 ursor-pointer rounded-lg"
              >
                Read
              </button>
              <button
                onClick={() => handleWishlist(book, "wishlist")}
                className="px-4 py-2 cursor-pointer font-semibold rounded-lg ml-2 bg-[#16a085] text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
