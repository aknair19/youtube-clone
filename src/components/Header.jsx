import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiYoutube } from "react-icons/si";

import { GrSearch } from "react-icons/gr";
import {
  HAMBURGER_URL,
  USER_ICON_URL,
  YOUTUBE_ICON_URL,
  YOUTUBE_SEARCH_API,
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  getSearchSuggestionData,
  getSearchSuggestionQuery,
} from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchSuggestionList = useSelector(
    (store) => store.search.searchSuggestionQuery
  );
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    dispatch(getSearchSuggestionQuery(result[1]));
    console.log(result);
  };
  const getSearchSuggestionsResults = async (e) => {
    e.preventDefault();
    navigate(`results?search_query=${searchQuery}`);
    const data = await fetch(
      `${YOUTUBE_SEARCH_RESULTS_API}q=${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const result = await data.json();
    dispatch(getSearchSuggestionData(result?.items));
    console.log(result);
    setSearchQuery("");
  };
  useEffect(() => {
    //make an api call on every key press. But as soon as diff between keypress is less than 200ms don't make api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // const handleResultOnClick = (i) => {
  //   console.log(searchSuggestionList[i], "world");
  // };

  return (
    <div className="flex  justify-between items-center p-4 shadow-lg w-full relative ">
      <ul className="flex   items-center w-1/5 gap-6   ">
        <li
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer text-3xl"
        >
          <GiHamburgerMenu />
        </li>
        <a href="/">
          <li className=" md:flex gap-1 hidden items-center  ">
            <SiYoutube className="text-4xl text-red-600" />
            <span className="text-lg font-bold">MyYoutube</span>
          </li>
        </a>
      </ul>

      <form
        className="flex  justify-center   items-center  flex-1"
        onSubmit={(e) => getSearchSuggestionsResults(e)}
      >
        <div className="   w-[80px] md:w-2/4   flex justify-center relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-[3px] border-black outline-none  w-full   rounded-tl-xl  rounded-bl-xl  placeholder:px-3 placeholder:text-xs md:placeholder:text-sm  px-3 text-md"
            placeholder="search for videos..."
            onFocus={() => setSearchSuggestions(true)}
            onBlur={() => setSearchSuggestions(false)}
          />

          {searchSuggestions && (
            <div className="absolute z-40 bg-white w-full shadow-lg rounded-xl p-2 py-3 px-4 mt-8">
              {searchSuggestionList.length > 0 &&
                searchSuggestionList.map((result, i) => (
                  <button
                    key={i}
                    className="hover:bg-gray-200 cursor-pointer block"
                  >
                    <span className="mr-2">
                      <GrSearch className="text-xl inline-block" />
                    </span>
                    {result}
                  </button>
                ))}
            </div>
          )}
        </div>
        <div className=" w-[20px] md:w-[2rem]">
          <button className="border-y border-r  border-y-black border-r-black rounded-tr-xl  flex justify-center  rounded-br-xl p-[5px] px-5 w-full  bg-gray-200">
            <div>
              <GrSearch className="text-xl   " />
            </div>
          </button>
        </div>
      </form>

      <ul className="flex w-1/5 justify-end items-center">
        <li>
          <img src={USER_ICON_URL} alt="user" className="w-[2.5rem]" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
