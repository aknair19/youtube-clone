import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 flex flex-col items-center gap-4 w-full">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
