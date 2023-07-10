import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { classMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const MainContainer = () => {
  const dispatch=useDispatch()
  return (
    <div className="flex-1 flex flex-col items-center gap-4 w-full"    onFocus={() => dispatch(classMenu())}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
