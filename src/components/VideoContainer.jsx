import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../utils/searchSlice";
import ShimmerUI from "./Shimmer";
import SearchVideoCard from "./SearchVideoCard";

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

  const [searchParams] = useSearchParams();

  return videos === null ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-col  w-full flex-wrap px-4 gap-4 mt-4  justify-center items-center ">
      
      {searchVideos !== null ? (
        <div className="flex flex-col w-full md:w-3/4 gap-3 p-2">
          <p className="w-full font-bold text-lg">Search Results for <span className="text-red-600 italic">{searchParams.get('search_query')}</span></p>
          {searchVideos.map((video) => {
            return (
              <Link
                to={`/watch?v=${video?.id?.videoId}`}
                key={video?.id?.videoId}
              >
                {/* thumbnail title,channelTitle,publishedat,viewcount */}
                <SearchVideoCard
                  id={video?.id}
                  thumbnail={video?.snippet?.thumbnails?.medium?.url}
                  title={video?.snippet?.title}
                  channelTitle={video?.snippet?.channelTitle}
               description={video?.snippet?.description}
               
                />
              </Link>
            );
          })}
        </div>
        
      ) : (
        <div className="flex  w-full flex-wrap px-4 gap-4  justify-center items-stretch">
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
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
