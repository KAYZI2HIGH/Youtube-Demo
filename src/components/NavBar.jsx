import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import { categories } from "../utils/constants.jsx";
import { myContext } from "../utils/Context.jsx";

const NavBar = ({ display }) => {
  const { selectedCategory, setSelectedCategory, setVideos } =
    useContext(myContext);

  return (
    <div
      className={`flex sm:flex-col bg-white sm:space-y-10 space-x-5 sm:space-x-0 max-w-full items-center sm:max-w-56 p-4 sm:py-0 overflow-scroll scroll-w ${display}`}
    >
      {categories.map((cat, index) => (
        <Link
          to="/"
          className={`flex flex-col items-center justify-center p-2  sm:bg-transparent rounded-lg sm:rounded-none sm:hover:bg-gray-100 cursor-pointer ${
            selectedCategory === cat.name
              ? "bg-slate-900 text-white sm:text-black sm:bg-slate-200"
              : "bg-gray-100 text-black"
          }`}
          key={index}
          onClick={() => {
            setSelectedCategory(cat.name);
            setVideos([]);
          }}
        >
          {selectedCategory === cat.name ? cat.icon1 : cat.icon2}
          <h1 className="text-sm">{cat.name}</h1>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
