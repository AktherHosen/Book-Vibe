import React, { useEffect, useState } from "react";
import { getBooksFromLS } from "../../utils/localStorage";
import { ImLocation } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2";
import { BsFileBarGraph } from "react-icons/bs";
import { Link } from "react-router-dom";
const Whislist = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getBooksFromLS("wishlist");
    setWishlistBooks(storedReadBooks);
  }, []);

  return (
    <div className="w-full">
      {wishlistBooks.map((book) => (
        <div key={book.bookId} className="mb-4">
          <div className="card flex-col lg:card-side bg-base-100 border-2 p-4">
            <div className="bg-base-200 w-full flex justify-center lg:w-[200px] rounded-xl">
              <img
                src={book.image}
                className=" p-4 w-[180px] h-[300px] rounded-xl "
                alt={book.bookName}
              />
            </div>
            <div className="card-body">
              <h2 className="card-title font-bold">{book.bookName}</h2>
              <p>By: {book.author}</p>
              <div className="flex flex-col lg:flex-row  mb-4 gap-3">
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  <h2 className="font-bold">Tag</h2>
                  {book.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-opacity-reduced font-semibold text-[#071952] px-4 py-1 rounded-full"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-row items-center gap-2 -mt-4 ">
                  <h2 className="flex flex-row gap-2 items-center">
                    <ImLocation size={20} />
                    <span className="text-md">Year of publishing :</span>
                    {book.yearOfPublishing}
                  </h2>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-2">
                  <HiMiniUsers size={20} />
                  <h2>Publisher : {book.publisher}</h2>
                </div>
                <div className="flex items-center gap-2">
                  <BsFileBarGraph size={20} />
                  <h2>Page : {book.totalPages}</h2>
                </div>
              </div>
              <hr className="my-3" />
              <div className="card-actions items-center">
                {/* Replace with appropriate action buttons */}
                <button className="bg-opacity-button-primary font-semibold text-[#34495e] px-4 py-2 rounded-full">
                  Category : {book.category}
                </button>
                <button className="bg-opacity-button-secondary font-semibold text-[#16a085] px-4 py-2 rounded-full">
                  Raging : {book.rating}
                </button>
                <Link
                  to={`/book/${book.bookId}`}
                  className="px-4 py-2 rounded-full cursor-pointer font-semibold bg-[#088395] text-white"
                >
                  View the List
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Whislist;
