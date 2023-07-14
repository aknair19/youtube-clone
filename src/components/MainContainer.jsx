import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { classMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";

const MainContainer = () => {
  const dispatch = useDispatch();
  const searchVideos = useSelector(
    (store) => store.search.searchSuggestionData
  );
  return (
    <div
      className="flex-1 flex flex-col items-center gap-4 w-full"
      onFocus={() => dispatch(classMenu())}
    >
      {!searchVideos && <ButtonList />}
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
