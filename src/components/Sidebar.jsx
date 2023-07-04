import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    isMenuOpen && (
      <div className="p-4 flex flex-col gap-2 shadow-lg h-screen w-1/5">
        <div>
          <ul className="py-1 flex flex-col gap-2 font-bold text-lg">
            <li><Link to='/'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>Youtube Music</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold">Subscriptions</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Watch Later</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">History</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Library</h1>
          <ul className="py-1 flex flex-col gap-2">
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
          </ul>
        </div>
      </div>
    )
  );
};

export default Sidebar;
