import React, { createContext, useState } from "react";

export const myContext = createContext();

export const Context = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);
  const [channelDetail, setChannelDetail] = useState();
  const [channelVideos, setChannelVideos] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <myContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        setVideos,
        channelDetail,
        setChannelDetail,
        open,
        handleOpen,
        channelVideos,
        setChannelVideos,
        videoDetail,
        setVideoDetail,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
