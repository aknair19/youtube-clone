import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { GOOGLE_API_KEY, YOUTUBE_GET_VIDEO_BY_ID } from "../constants";
import Scroll from "./Scroll";

const WatchPage = () => {
  const [videoData, setVideoData] = useState(null);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const getVideoDetails = async () => {
    const data = await fetch(
      `${YOUTUBE_GET_VIDEO_BY_ID}${searchParams.get("v")}&key=${GOOGLE_API_KEY}`
    );
    const result = await data.json();
    console.log(result?.items[0]);
    setVideoData(result?.items[0]);
  };

  useEffect(() => {
    dispatch(classMenu());
    getVideoDetails();
  }, []);
  return (
    <div className=" flex  flex-col   justify-start  w-full   p-4  gap-2">
      <div className="flex flex-col md:flex-row w-full gap-1 border  ">
        <div className="w-full">
          <Scroll />
          {!videoData ? (
            <div className="w-full h-full animate-ping bg-grap-400"></div>
          ) : (
            <iframe
              className="w-full h-full  "
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <LiveChat />
      </div>

      <div className=" w-full ">
        <div className="w-3/4 py-2 text-xl text-gray-600 font-bold">
          {videoData?.snippet?.title}
        </div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
