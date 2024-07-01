import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-[70px] navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg dropdown-content gap-x-3 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#071952] border border-[#071952] outline-none rounded-lg "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li className="bg-none">
              <NavLink
                to="/listed-books"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#071952] border  border-[#071952] outline-none rounded-lg s"
                    : ""
                }
              >
                Listed Book
              </NavLink>
            </li>

            <li>
              <NavLink>Pages to Read</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl text-[#071952] font-bold">
          Book Vibe
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center text-lg px-1 gap-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#071952] border border-[#071952] outline-none rounded-lg "
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/listed-books"
              className={({ isActive }) =>
                isActive
                  ? "text-[#071952] border  border-[#071952] outline-none rounded-lg s"
                  : ""
              }
            >
              Listed Book
            </NavLink>
          </li>

          <li>
            <NavLink>Pages to Read</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-4 py-2 cursor-pointer font-semibold rounded-lg bg-[#088395] text-white">
          Sign in
        </a>
        <a
          className="px-4 py-2 cursor-pointer font-semibold rounded-lg ml-3 bg-[#37B7C3] text-white
        "
        >
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Nav;
