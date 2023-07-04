import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
    const result = await data.json();
    setVideos(result?.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);

  return (
    <div className="flex  flex-wrap px-4 gap-4  justify-center">
      <VideoCard info={videos} />
    </div>
  );
};

export default VideoContainer;
