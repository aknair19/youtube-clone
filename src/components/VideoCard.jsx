import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  //   const { snippet, statistics } = info;
  //   const { title, channelTitle } = snippet;

  return (
    <>
      {info.map((video) => {
        return (
          <div
            className="flex flex-col gap-1 shadow-lg w-[300px] rounded-xl "
            key={video?.id}
          >
            <div >
              <img className="rounded-xl "
                src={video?.snippet?.thumbnails?.medium?.url}
                alt="thumbnail"
              />
            </div>
            <ul className="flex flex-col flex-wrap p-2">
              <li className="font-semibold text-md ">
                {video?.snippet?.localized?.title}
              </li>
              <li className="text-sm text-gray-500">
                {video?.snippet?.channelTitle}
              </li>
              <ul className="flex gap-3">
                <li>{video?.statistics?.viewCount} views</li>
                <li>.{video?.snippet?.publishedAt}</li>
              </ul>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default VideoCard;
