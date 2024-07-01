import React, { useEffect, useState } from "react";
import { getBooksFromLS } from "../../utils/localStorage";
import { ImLocation } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2";
import { BsFileBarGraph } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
const Read = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBooks = getBooksFromLS("read");
    setReadBooks(storedReadBooks);
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <div className="dropdown mb-10">
          <div
            tabIndex={0}
            role="button"
            className="text-white font-bold text-lg rounded-lg py-3  bg-[#16a085]  mb-1 mt-2 px-12"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("pages")}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("year")}>Published Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        {readBooks.map((book) => (
          <div key={book.bookId} className="mb-4">
            <div className="card flex-col lg:card-side bg-base-100 border-2 p-4">
              <div className="bg-base-200 w-full flex justi lg:w-[200px] rounded-xl">
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
    </div>
  );
};

export default Read;
