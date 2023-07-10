import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    isMenuOpen && (
      <div className="p-4 flex flex-col gap-2 shadow-lg h-screen overflow-y-auto w-[250px]  min-w-[200px] max-w-[400px] absolute z-40 bg-white cursor-pointer ">
        <div>
          <ul className="py-1 flex flex-col gap-2 font-bold text-lg ">
            <Link to="/">
              <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
                Home
              </li>
            </Link>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Shorts
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Subscriptions
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Youtube Music
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold">Subscriptions</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Music
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Sports
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Gaming
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Movies
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Watch Later</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Music
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Sports
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Gaming
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Movies
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">History</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Music
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Sports
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Gaming
            </li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Movies
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Library</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Music
            </li>
            <li>Sports</li>
            <li>Gaming</li>
            <li className=" hover:bg-gray-200 hover:p-[3px] hover:rounded-lg p-[3px] ">
              Movies
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
