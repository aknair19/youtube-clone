import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(classMenu());
  }, []);
  return (
    <div className=" flex  flex-col   justify-between w-full   p-4  gap-2">
      <div className="flex flex-col md:flex-row w-full gap-1 border  ">
        <div className="  w-full   ">
          <iframe
            className="w-full h-full  "
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>

      <div className=" w-full ">
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
