import React from "react";
import { HAMBURGER_URL, USER_ICON_URL, YOUTUBE_ICON_URL } from "../constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex  justify-between p-4 shadow-lg">
      <ul className="flex items-center w-1/5 space-between gap-4 ">
        <li onClick={() => toggleMenuHandler()} className="cursor-pointer">
          <img src={HAMBURGER_URL} alt="hamburger" className="w-10 bg-white " />
        </li>
        <li>
          <img src={YOUTUBE_ICON_URL} alt="" className="w-28 bg-white " />
        </li>
      </ul>
      <ul className="flex flex-1  justify-center  items-center">
        <li className="">
          <input
            type="text"
            className="border p-[3px] border-black outline-none w-[400px] rounded-tl-xl  rounded-bl-xl"
          />
        </li>
        <li>
          <button className="border-y border-r border-y-black border-r-black rounded-tr-xl  rounded-br-xl p-[3px] px-3 bg-gray-200">
            🔍
          </button>
        </li>
      </ul>
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
