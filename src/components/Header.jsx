import { Search } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between items-center py-4 sm:px-8 sticky top-0 border-b sm:mb-8 bg-white z-10 shadow-sm">
      <div className="flex sm:space-x-8">
        <Menu className="text-[40px] font-bold hidden sm:block" />
        <img
          onClick={() => navigate("/")}
          src="/icons/youtube-logo.svg"
          alt="Youtube"
          className="w-32"
        />
      </div>
      <div className="flex relative">
        <input
          type="text"
          className="focus:outline-none bg-transparent border-2 w-full rounded-3xl px-4 py-1 hidden sm:flex"
          placeholder="Search..."
        />
        <Search className="w-8 absolute right-2 top-[50%] translate-y-[-50%]" />
      </div>
    </header>
  );
};

export default Header;
