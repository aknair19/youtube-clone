import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer, { Comments } from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(classMenu());
  }, []);
  return (
    <div className=" flex  flex-col   w-screen justify-center md:items-start ">
      <div className="  w-full h-full  ">
        <iframe
          className="w-full h-[30rem] lg:h-[50rem] "
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" w-full p-2">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
