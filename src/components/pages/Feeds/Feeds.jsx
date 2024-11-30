import React, { useContext, useEffect } from "react";
import Header from "../../Header";
import { categories } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";
import { myContext } from "../../../utils/Context";
import NavBar from "../../NavBar";
import SkeletonLayout from "../../../skeletons/SkeletonLayout";

const Feeds = () => {
  const { selectedCategory, videos, setVideos } = useContext(myContext);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <section className="grid sm:grid-cols-auto-input gap-5 p-3 sm:p-0 sm:pr-5 w-full max-h-[calc(100vh-110px)] overflow-scroll scroll-w bg-white">
      {videos.length !== 0
        ? videos.map((vid) => (
            <VideoCard
              key={vid.id.videoId}
              data={vid}
            />
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <SkeletonLayout key={n} />
          ))}
    </section>
  );
};

export default Feeds;
