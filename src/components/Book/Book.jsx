import React from "react";
import "./Book.css";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="card bg-base-100 w-full h-[450px]  border p-4"
    >
      <figure className="bg-base-200 rounded-lg h-[300px]">
        <img src={image} className="p-8 " alt="Shoes" />
      </figure>
      <div className="px-2 py-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((t, idx) => (
            <p
              key={idx}
              className="bg-opacity-reduced font-semibold text-[#071952] px-4 py-1 rounded-full"
            >
              #{t}
            </p>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p className="text-lg">By : {author}</p>
        <hr />
        <div className="card-actions justify-between text-lg">
          <p>{category}</p>
          <p className="flex items-center gap-1">
            {rating} <FaRegStar size={18} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
