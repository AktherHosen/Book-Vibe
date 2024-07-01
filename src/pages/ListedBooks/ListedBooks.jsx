import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const ListedBooks = () => {
  const location = useLocation();
  const [tabIdx, setTabIdx] = useState(0);

  useEffect(() => {
    if (location.pathname.includes("whislist")) {
      setTabIdx(1);
    } else {
      setTabIdx(0);
    }
  }, [location.pathname]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Books</h1>
      <div className="mb-3 ">
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
            to={`whislist`}
            onClick={() => setTabIdx(1)}
            role="tab"
            className={`tab ${tabIdx === 1 ? "tab-active" : ""}`}
          >
            Whishlist
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
