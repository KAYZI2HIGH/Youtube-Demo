import { Button } from "@mui/material";
import React, { useContext } from "react";
import { myContext } from "../../../utils/Context";

const ChannelProfile = ({ data }) => {

  const { handleOpen } = useContext(myContext);

  return (
    <section className="flex space-x-4">
      <div>
        <img
          src={data.snippet.thumbnails.high.url}
          alt={data.snippet.title}
          className="size-20 sm:size-40 rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-body font-bold tracking-wider">
          {data.snippet.title}
        </h1>
        <h1 className="text-gray-500 text-sm">{`${
          data.snippet.customUrl
        } • ${parseInt(
          data.statistics.subscriberCount
        ).toLocaleString()} Subscibers • ${parseInt(
          data.statistics.videoCount
        ).toLocaleString()} Videos`}</h1>
        <h1 className="text-gray-500 text-sm">
          {`${data.snippet.description.slice(0, 62)}`}
          <Button
            variant="text"
            color="default"
            onClick={handleOpen}
            className='p-0 text-gray-600 font-semibold lowercase'
          >
            ...more
          </Button>
        </h1>
      </div>
    </section>
  );
};

export default ChannelProfile;
