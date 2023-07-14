import React from "react";

const SearchVideoCard = ({
  id,
  thumbnail,
  title,
  channelTitle,
  description,
}) => {
  return (
    <div
      className="flex-col flex md:flex-row gap-2  shadow-lg h-fit rounded-xl"
      key={id}
    >
      <div className="rounded-xl">
        <img src={thumbnail} alt="thumbnail" className="rounded-xl " />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/4 ">
        <p className="font-bold   text-lg md:text-xl text-ellipsis overflow-hidden ">
          {title}
        </p>
        <p className="truncate font-semibold text-gray-600">{channelTitle}</p>
        <p className="text-gray-600  text-sm text-ellipsis overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
