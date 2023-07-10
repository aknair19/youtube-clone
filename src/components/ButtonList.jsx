import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex justify-start  w-full gap-2 p-4 px-[40px] ">
      {buttonList.map((list, i) => (
        <Button key={i} name={list.name} />
      ))}
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
