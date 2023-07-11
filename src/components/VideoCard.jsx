import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  GOOGLE_API_KEY,
  YOUTUBE_GET_VIDEO_BY_ID,
  kFormatter,
} from "../constants";
import moment from "moment/moment";

const VideoCard = ({
  thumbnail,
  title,
  id,
  channelTitle,
  releaseDate,
  viewsCount,
}) => {
  // const getVideosById = async (videoId) => {
  //   const data = await fetch(
  //     `${YOUTUBE_GET_VIDEO_BY_ID}${videoId}&key=${GOOGLE_API_KEY}`
  //   );
  //   const result = await data.json();
  //   console.log(result);
  //   return result?.items[0]?.statistics?.viewCount
  // };

  //thumbnail title,channelTitle,publishedat,viewcount
  return (
    <div className="flex flex-col gap-1 shadow-lg w-[320px]   rounded-xl  ">
      <div>
        <img className="rounded-xl " src={thumbnail} alt="thumbnail" />
      </div>
      <ul className="flex flex-col flex-wrap p-2">
        <li className="font-semibold text-md ">{title}</li>
        <li className="text-sm text-gray-500">{channelTitle}</li>
        <ul className="flex gap-3 text-xs">
          <li>{kFormatter(viewsCount)} views</li>
          <li>{moment(releaseDate).fromNow()}</li>
        </ul>
      </ul>
    </div>
  );
};

// Add HOC to add additional components to card
// export const AddVideoCard = ({ video }) => {
//   return (
//     <div className="p-1 border-2 border-red-800">
//       <a href="https://www.google.com" target="blank">
//         <VideoCard video={video} />
//       </a>
//     </div>
//   );
// };

export default VideoCard;
