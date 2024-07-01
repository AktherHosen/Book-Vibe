import React from "react";
import ErrorImg from "../../assets/errorpage.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img src={ErrorImg} className="max-w-lg h-[350px]" alt="" />
      <h2 className="font-bold text-xl">404, That's an error.</h2>
      <p>No page found</p>
      <Link
        to="/"
        className="bg-[#071952] text-white mt-3 border border-[#071952] outline-none rounded-md px-3 py-2 "
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
