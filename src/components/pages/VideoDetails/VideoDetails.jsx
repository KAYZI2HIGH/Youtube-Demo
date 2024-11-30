import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";
import { myContext } from "../../../utils/Context";
import SkeletonLayout from "../../../skeletons/SkeletonLayout";
import VideoCard from "../Feeds/VideoCard";

const VideoDetails = () => {
  const { id } = useParams();
  const { videoDetail, setVideoDetail } = useContext(myContext);
  const [relatedVideos, setRelatedVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`
    ).then((data) => {
      setVideoDetail(data.items[0]);
    });

    fetchFromAPI(
      `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`
    ).then((data) => {
      setRelatedVideos(data.items);
    });
  }, [id]);

  const navigate = useNavigate();

  console.log(relatedVideos);

  return (
    <section className="w-full h-screen sm:flex space-y-10 sm:space-y-0 sm:space-x-8 pb-3 px-2 sm:px-4 bg-white overflow-scroll sm:overflow-hidden sm:max-h-[calc(100vh-110px)]">
      <section className="w-full space-y-4">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          width="100%"
          controls={true}
          className="sm:h-full"
        />
        {videoDetail.length !== 0 && (
          <div className="space-y-2">
            <h1 className="text-md sm:text-lg font-bold">
              {videoDetail.snippet.title}
            </h1>
            <div className="sm:flex w-full justify-between items-center">
              <p
                className="text-sm text-gray-400 hover:underline cursor-pointer"
                onClick={() =>
                  navigate(`/channel/${videoDetail.snippet.channelId}`)
                }
              >
                {videoDetail.snippet.channelTitle}
              </p>
              <p className="text-md text-gray-400">
                {`${parseInt(
                  videoDetail.statistics.likeCount
                ).toLocaleString()} Likes • ${parseInt(
                  videoDetail.statistics.viewCount
                ).toLocaleString()} Views`}
              </p>
            </div>
          </div>
        )}
      </section>
      <section className="sm:w-[40%] sm:max-h-[calc(100vh-100px)] overflow-y-scroll grid sm:grid-cols-auto-videos gap-5">
        {relatedVideos
          ? relatedVideos.map((vid) => (
              <VideoCard
                key={vid.id.videoId}
                data={vid}
              />
            ))
          : [1, 2, 3, 4, 5].map((n) => <SkeletonLayout key={n} />)}
      </section>
    </section>
  );
};

export default VideoDetails;
