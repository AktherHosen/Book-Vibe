import React from "react";
import BannerImg from "../../assets/banner.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-40px)] rounded-lg p-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full text-center sm:text-start md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Books for refreshen up your bookshelf!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            to="/listed-books"
            className="px-4 py-3 cursor-pointer font-semibold rounded-lg bg-[#34495e] text-white"
          >
            View the List
          </Link>
        </div>

        <div className="w-full  md:w-1/2 flex justify-center sm:justify-end">
          <img src={BannerImg} className="w-[300px] rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
