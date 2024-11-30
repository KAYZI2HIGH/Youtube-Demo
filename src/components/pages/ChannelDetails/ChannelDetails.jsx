import React, { useContext, useEffect } from "react";
import ChannelPSkeleton from "../../../skeletons/ChannelPSkeleton";
import VideoList from "./VideoList";
import ChannelProfile from "./ChannelProfile";
import { useParams } from "react-router-dom";
import { myContext } from "../../../utils/Context";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";
import { Backdrop } from "@mui/material";
import { GpsFixed, Language, OndemandVideo, RecordVoiceOver, TrendingUp } from "@mui/icons-material";
import MoreInfo from "./MoreInfo";

const ChannelDetails = () => {
  const { id } = useParams();
  const { channelDetail, setChannelDetail, open, handleOpen } = useContext(myContext);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet%2Cstatistics&id=${id}`).then((data) => {
      setChannelDetail(data.items[0]);
    });

    return () => {
      setChannelDetail([])
    };
  }, [id]);

  return (
    <>
      <section className="max-h-[calc(100vh-110px)] space-y-10 overflow-scroll scroll-w w-full">
        {channelDetail ? (
          <ChannelProfile data={channelDetail} />
        ) : (
          <ChannelPSkeleton />
        )}
        <section className="grid sm:grid-cols-auto-input">
          <VideoList id={id} />
        </section>
      </section>
      {channelDetail && <MoreInfo channelDetail={ channelDetail} />}
    </>
  );
};

export default ChannelDetails;
