import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const ListedBooks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tabIdx, setTabIdx] = useState(0);
  const [sortCriteria, setSortCriteria] = useState("all");

  useEffect(() => {
    if (location.pathname.includes("wishlist")) {
      setTabIdx(1);
    } else {
      setTabIdx(0);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/listed-books") {
      navigate("read");
    }
  }, [location.pathname, navigate]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Books</h1>
      <div className="flex justify-center">
        <div className="dropdown mb-10">
          <div
            tabIndex={0}
            role="button"
            className="text-white font-bold text-lg rounded-lg py-3 bg-[#16a085] mb-1 mt-2 px-12"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => setSortCriteria("rating")}>Rating</button>
            </li>
            <li>
              <button onClick={() => setSortCriteria("pages")}>
                Number of Pages
              </button>
            </li>
            <li>
              <button onClick={() => setSortCriteria("year")}>
                Published Year
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-3">
        <div role="tablist" className="max-w-sm tabs tabs-lifted mb-4">
          <Link
            to={`read`}
            onClick={() => setTabIdx(0)}
            role="tab"
            className={`tab ${tabIdx === 0 ? "tab-active" : ""}`}
          >
            Read
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => setTabIdx(1)}
            role="tab"
            className={`tab ${tabIdx === 1 ? "tab-active" : ""}`}
          >
            Wishlist
          </Link>
        </div>
        <Outlet context={{ sortCriteria }} />
      </div>
    </div>
  );
};

export default ListedBooks;
