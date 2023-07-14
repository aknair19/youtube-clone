import React from "react";
import Button from "./Button";

// Import Swiper styles

import "swiper/css/bundle";
import Slider from "./Slider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { getSearchSuggestionData } from "../utils/searchSlice";
const ButtonList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getSearchSuggestionsResults = async (category) => {
    navigate(`/results?search_query=${category}`);
    const data = await fetch(
      `${YOUTUBE_SEARCH_RESULTS_API}q=${category}&key=${GOOGLE_API_KEY}`
    );
    const result = await data.json();
    dispatch(getSearchSuggestionData(result?.items));
  };
  return (
    <div className="flex flex-col w-full">
      <div className="flex  flex-wrap justify-start   gap-2 p-4 px-[20px] md:[40px]  ">
        {buttonList.map((list, i) => (
          <Button
            key={i}
            name={list.name}
            getCategory={getSearchSuggestionsResults}
          />
        ))}
      </div>
      {/* <Slider list={buttonList} /> */}
    </div>
  );
};

export default ButtonList;

export const buttonList = [
  {
    name: "All",
  },
  { name: "Mixes" },
  { name: "Comedy" },
  { name: "News" },
  { name: "Gadgets" },
  { name: "Fitness" },
  { name: "Bollywood Songs" },
];
