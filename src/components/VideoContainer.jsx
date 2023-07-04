import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex  w-full flex-wrap px-4 gap-4  justify-center items-stretch ">
      <AddVideoCard video={videos[0]} />

      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video?.id}`} key={video?.id}>
            <VideoCard video={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
