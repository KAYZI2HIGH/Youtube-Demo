import { Skeleton } from "@mui/material";
import React from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonLayout = () => {
  return (
    <section>
      <SkeletonElement type={"img"} />
      <div className="mt-[8px] flex">
        <SkeletonElement type={"avatar"} />
        <div className="w-full h-fit space-y-2">
          <SkeletonElement type={"h1"} />
          <SkeletonElement type={"h1"} />
          <SkeletonElement type={"p"} />
        </div>
      </div>
    </section>
  );
};

export default SkeletonLayout;
