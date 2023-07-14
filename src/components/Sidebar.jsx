import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";
import { GiCancel } from "react-icons/gi";

import { YOUTUBE_ICON_URL, sidebarData } from "../utils/constants";
import { classMenu, toggleMenu } from "../utils/appSlice";
import { SiYoutube } from "react-icons/si";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  return (
    isMenuOpen && (
      <div className="p-4 flex flex-col gap-2 shadow-lg h-screen  absolute    w-[250px]  min-w-[200px] max-w-[400px]  z-40 bg-white cursor-pointer border top-0 left-0  ">
        <button
          className="absolute right-3 text-red-800 text-2xl"
          onClick={() => dispatch(toggleMenu())}
        >
          <GiCancel />
        </button>
        <div className="flex flex-col gap-2">
          <a href="/">
            <div className=" flex gap-1  items-center  ">
              <SiYoutube className="text-4xl text-red-600" />
              <span className="text-lg font-bold">MyYoutube</span>
            </div>
          </a>
          <div>
            <ul className="py-1 flex flex-col gap-2 font-bold text-lg ">
              {sidebarData.map((data, i) => {
                return (
                  <Link to={data?.to} key={i}>
                    <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] flex gap-2 items-center   ">
                      <span className=" text-2xl ">{data.icon}</span>{" "}
                      {data.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Sidebar;
