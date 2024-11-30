import React from "react";

const SkeletonElement = ({ type }) => {
  const classes = () => {
    if (type === "img") {
      return "w-full h-[200px] rounded-md";
    } else if (type === "h1") {
      return "w-full h-5 rounded-lg";
    } else if (type === "p") {
      return "w-1/2 h-[12px] mt-[8px] rounded-lg";
    } else if (type === "avatar") {
      return "size-[50px] rounded-full mr-[10px] ";
    } else if (type === "avatar-lg") {
      return "size-40 rounded-full mr-[10px]";
    } else if (type === "h1-lg") {
      return "w-full h-10 rounded-lg";
    }
  };

  return <div className={`bg-gray-300 animate-pulse ${classes()}`}></div>;
};

export default SkeletonElement;
