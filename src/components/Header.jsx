import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrSearch } from "react-icons/gr";
import {
  HAMBURGER_URL,
  USER_ICON_URL,
  YOUTUBE_ICON_URL,
  YOUTUBE_SEARCH_API,
} from "../constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    setSearchResults(result[1]);

    console.log(result);
  };
  useEffect(() => {
    //make an api call on every key press. But as soon as diff between keypress is less than 200ms don't make api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex  justify-between items-center p-4 shadow-lg w-full ">
      <ul className="flex   items-center w-1/5 gap-4   ">
        <li
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer text-3xl"
        >
          <GiHamburgerMenu />
        </li>

        <li className="hidden md:block">
          <img src={YOUTUBE_ICON_URL} alt="" className="w-32 bg-white " />
        </li>
      </ul>

      <ul className="flex  justify-center   items-center  flex-1">
        <li className="   w-1/4 md:w-2/4   flex justify-center relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-[3px] border-black outline-none  flex-1   rounded-tl-xl  rounded-bl-xl  placeholder:px-3 placeholder:text-xs md:placeholder:text-sm  px-3 text-md"
            placeholder="search for videos..."
            onFocus={() => setSearchSuggestions(true)}
            onBlur={() => setSearchSuggestions(false)}
          />

          {searchSuggestions && (
            <ul className="absolute z-40 bg-white w-full shadow-lg rounded-xl p-2 py-3 px-4 mt-8">
              {searchResults.length > 0 &&
                searchResults.map((result, i) => (
                  <li key={i} className="hover:bg-gray-200 cursor-pointer">
                    <span className="mr-2">
                      <GrSearch className="text-xl inline-block" />
                    </span>
                    {result}
                  </li>
                ))}
            </ul>
          )}
        </li>
        <li className="w-[30px]">
          <button className="border-y border-r  border-y-black border-r-black rounded-tr-xl  flex justify-center  rounded-br-xl p-[5px] px-5 w-full  bg-gray-200">
            <div>
              <GrSearch className="text-xl   " />
            </div>
          </button>
        </li>
      </ul>

      <ul className="flex w-1/5 justify-end items-center">
        <li>
          <img src={USER_ICON_URL} alt="user" className="w-[2.5rem]" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
