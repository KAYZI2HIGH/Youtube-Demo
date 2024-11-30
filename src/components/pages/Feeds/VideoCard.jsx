import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ data }) => {
  const [details, setDetails] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFromAPI(
      `channels?part=snippet%2Cstatistics&id=${data.snippet.channelId}`
    ).then((data) => {
      setDetails(data.items[0].snippet.thumbnails.high.url);
    });
  }, []);

  return (
    <section
      onClick={() => navigate(`/video/${data.id.videoId}`)}
      className="cursor-pointer"
    >
      <div className="min-w-[100px]">
        <img
          src={data.snippet?.thumbnails?.high?.url}
          alt="thumbnails"
          width="100%"
          className="rounded-xl"
        />
      </div>
      <div className="mt-[8px] flex">
        <Link to={`/channel/${data.snippet.channelId}`}>
          <img
            src={details}
            alt=""
            className="size-[40px] mr-[15px] rounded-full"
          />
        </Link>
        <div className="channel-title">
          <p className="text-sm">{data.snippet.title}</p>
          <Link
            to={`/channel/${data.snippet.channelId}`}
            className="hover:underline"
          >
            <p className="text-[12px] text-gray-400 mt-[8px]">
              {data.snippet.channelTitle}
            </p>
          </Link>
          <p className="text-[12px] text-gray-400">3.4M views · 6 months ago</p>
        </div>
      </div>
    </section>
  );
};

export default VideoCard;
