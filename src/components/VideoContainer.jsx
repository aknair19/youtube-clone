import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../utils/searchSlice";
import ShimmerUI from "./Shimmer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videos = useSelector((store) => store.search.popularVideos);
  const searchVideos = useSelector(
    (store) => store.search.searchSuggestionData
  );
  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_VIDEOS);
    const result = await data.json();
    dispatch(getVideos(result?.items));

    console.log(result?.items);
  };

  useEffect(() => {
    getPopularVideos();
  }, []);
  console.log(searchVideos);
  return videos === null ? (
    <ShimmerUI />
  ) : (
    <div className="flex  w-full flex-wrap px-4 gap-4  justify-center items-stretch ">
      {searchVideos !== null ? (
        <>
          {searchVideos.map((video) => {
            return (
              <Link
                to={`/watch?v=${video?.id?.videoId}`}
                key={video?.id?.videoId}
              >
                {/* thumbnail title,channelTitle,publishedat,viewcount */}
                <VideoCard
                  id={video?.id}
                  thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  title={video?.snippet?.title}
                  channelTitle={video?.snippet?.channelTitle}
                  releaseDate={video?.snippet?.publishTime}
                  viewsCount={video?.statistics?.viewCount}
                />
              </Link>
            );
          })}
        </>
      ) : (
        <>
          {" "}
          {videos.map((video) => {
            return (
              <Link to={`/watch?v=${video?.id}`} key={video?.id}>
                {/* thumbnail title,channelTitle,publishedat,viewcount */}
                <VideoCard
                  id={video?.id}
                  thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  title={video?.snippet?.title}
                  channelTitle={video?.snippet?.channelTitle}
                  releaseDate={video?.snippet?.publishedAt}
                  viewsCount={video?.statistics?.viewCount}
                />
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
