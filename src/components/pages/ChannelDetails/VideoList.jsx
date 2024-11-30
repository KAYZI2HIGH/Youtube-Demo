import React, { useContext } from "react";
import { useEffect } from "react";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";
import { myContext } from "../../../utils/Context";
import VideoCard from "../Feeds/VideoCard";

const VideoList = ({ id }) => {
  const { channelVideos, setChannelVideos } = useContext(myContext);

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date&m`).then(
      (data) => setChannelVideos(data.items)
    );
  });
  console.log(channelVideos);
  return (
    <section className="grid sm:grid-cols-auto-input gap-5 p-3 sm:p-0 sm:pr-5 w-full  overflow-scroll scroll-w">
      {channelVideos.length !== 0
        ? channelVideos.map((vid) => (
            <VideoCard
              key={vid.id.videoId}
              data={vid}
            />
          ))
        : ""}
    </section>
  );
};

export default VideoList;
