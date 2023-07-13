import React from "react";
import Button from "./Button";


// Import Swiper styles

import "swiper/css/bundle";
import Slider from "./Slider";
const ButtonList = () => {
  return (
    <div className="flex flex-col w-full">
    <div className="flex  flex-wrap justify-start   gap-2 p-4 px-[20px] md:[40px]  ">
      {buttonList.map((list, i) => (
        <Button key={i} name={list.name} />
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
