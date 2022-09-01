import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-6">
      <div className="flex items-center text-white">
        <span className="font-semibold text-xl">Assignment</span>
      </div>
      <div className="text-white text-sm font-bold">
        <Link to="/" className="inline-block py-2 hover:border-b border-white">
          Home
        </Link>
        <Link
          to="/add-product"
          className="inline-block py-2 ml-4 hover:border-b border-white"
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};
export default Header;
