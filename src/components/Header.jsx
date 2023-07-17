import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SiYoutube } from "react-icons/si";
import { BiVideoPlus } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { BiSolidUserCircle } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";

import { IoMdNotificationsOutline } from "react-icons/io";
import {
  HAMBURGER_URL,
  USER_ICON_URL,
  YOUTUBE_ICON_URL,
  YOUTUBE_SEARCH_API,
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_RESULTS_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  clearSearchQuery,
  getSearchQuery,
  getSearchSuggestionData,
  getSearchSuggestionQuery,
} from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const searchQuery1 = useSelector((store) => store.search.searchQuery);

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
    try {
      if (searchQuery1.length > 0) {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery1);
        const result = await data.json();
        dispatch(getSearchSuggestionQuery(result?.data[1]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getVideosByCORS = async () => {
  //   try {
  //     const data = await fetch("http://localhost:8000/?q=" + searchQuery1);
  //     const result = await data.json();
  //     console.log("from server", result?.data[1]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const getSearchSuggestionsResults = async (e) => {
    try {
      e.preventDefault();
      if (searchQuery1.length > 0) {
        navigate(`/results?search_query=${searchQuery1}`);
        const data = await fetch(
          `${YOUTUBE_SEARCH_RESULTS_API}q=${searchQuery1}&key=${GOOGLE_API_KEY}`
        );
        const result = await data.json();
        dispatch(getSearchSuggestionData(result?.items));

        setSearchSuggestions(!searchSuggestions);
        dispatch(getSearchSuggestionQuery(""));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //make an api call on every key press. But as soon as diff between keypress is less than 200ms don't make api call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery1]);

  // const handleResultOnClick = (i) => {
  //   console.log(searchSuggestionList[i], "world");
  // };

  return (
    <div className="flex  justify-between items-center p-2 md:p-4 shadow-lg w-full relative ">
      <ul className="flex   items-center   w-[40px] md:w-[220px]  md:gap-6  ">
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
        className="flex justify-center   items-center    md:w-3/6 b"
        onSubmit={(e) => getSearchSuggestionsResults(e)}
        onBlur={() =>
          searchQuery1.length === 0 && setSearchSuggestions(!searchSuggestions)
        }
      >
        <div className="flex-1     flex  justify-center  md:justify-center ">
          <div className=" flex justify-between w-3/4 md:w-3/4 relative">
            <input
              type="text"
              value={searchQuery1}
              onChange={(e) => dispatch(getSearchQuery(e.target.value))}
              className="   border-y border-l border-y-black border-l-black p-[3px]     w-full   rounded-tl-xl  rounded-bl-xl  placeholder:px-3 placeholder:text-xs md:placeholder:text-sm   truncate text-md"
              placeholder="Search"
              onFocus={() => setSearchSuggestions(!searchSuggestions)}
            />
            {searchQuery1.length > 0 && (
              <button
                className="border-y border-y-black "
                onClick={() => dispatch(clearSearchQuery())}
              >
                <MdOutlineClear className=" text-red-600 text-2xl mt-1 mr-1" />
              </button>
            )}

            {searchSuggestions && (
              <div className="absolute z-40 bg-white w-full  shadow-lg rounded-xl p-2 py-3 px-4 mt-9">
                {searchSuggestionList !== null &&
                  searchSuggestionList.map((result, i) => (
                    <button
                      className="  flex hover:bg-gray-200 w-full  cursor-pointer "
                      key={i}
                      onClick={() => dispatch(getSearchQuery(result))}
                    >
                      <span>
                        <span className="mr-2">
                          <GrSearch className="text-xl inline-block" />
                        </span>
                        {result}
                      </span>
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
        </div>
      </form>

      <ul className="flex      w-1/6 md:w-[150px]    justify-end items-center gap-1 overflow-hidden ">
        <li className="hidden md:block hover:bg-gray-200 hover:rounded-full hover:p-2 p-2">
          <BiVideoPlus className="text-2xl" />
        </li>
        <li className="hover:bg-gray-200 hover:rounded-full hover:p-2 p-2 hidden md:block ">
          <IoMdNotificationsOutline className="text-2xl" />
        </li>
        <li>
          <BiSolidUserCircle className="text-3xl" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
