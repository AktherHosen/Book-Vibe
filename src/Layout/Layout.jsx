import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className="px-4 md:px-12">
        <div>
          <Nav />
        </div>
        <div className="min-h-[calc(100vh-116px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
