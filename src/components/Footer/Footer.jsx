import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center  text-base-content p-4">
      <aside>
        <p className="text-lg">
          Copyright © ${new Date().getFullYear()} - All right reserved by Book
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
