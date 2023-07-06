import React, { useEffect, useState } from "react";
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
    <div className="flex  justify-between  items-center p-4 shadow-lg">
      <ul className="flex items-center w-1/5 space-between gap-4 ">
        <li onClick={() => toggleMenuHandler()} className="cursor-pointer">
          <img src={HAMBURGER_URL} alt="hamburger" className="w-10 bg-white " />
        </li>

        <li>
          <img src={YOUTUBE_ICON_URL} alt="" className="w-28 bg-white " />
        </li>
      </ul>
      <div className="relative">
        <ul className="flex flex-1  justify-center  items-center">
          <li className="">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-[3px] border-black outline-none w-[400px] rounded-tl-xl  rounded-bl-xl  placeholder:px-3 px-3 text-md"
              placeholder="search for anything..."
              onFocus={() => setSearchSuggestions(true)}
              onBlur={() => setSearchSuggestions(false)}
            />
          </li>
          <li>
            <button className="border-y border-r border-y-black border-r-black rounded-tr-xl  rounded-br-xl p-[3px] px-3 bg-gray-200">
              🔍
            </button>
          </li>
        </ul>
        {searchSuggestions && (
          <ul className="absolute z-40 bg-white w-full shadow-lg rounded-xl p-2 py-3 px-4 mt-1">
            {searchResults.length > 0 &&
              searchResults.map((result, i) => (
                <li key={i} className="hover:bg-gray-200 cursor-pointer">
                  <span className=" mr-2">🔍</span>
                  {result}
                </li>
              ))}
          </ul>
        )}
      </div>
      <ul className="flex w-1/5 justify-end items-center">
        <li>
          <img src={USER_ICON_URL} alt="user" className="w-10" />
        </li>
        <li className="font-bold">USER</li>
      </ul>
    </div>
  );
};

export default Header;
