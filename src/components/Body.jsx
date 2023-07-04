import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex gap-16 space-y-3">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
