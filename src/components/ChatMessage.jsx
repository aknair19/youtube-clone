import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  gap-2 width-full p-1 rounded-lg px-2  items-center ">
      <p className="w-[32px] h-8 rounded-full bg-purple-600 text-white font-bold text-center p-1">{name.substring(0,1)}</p>
      <div className="flex  flex-wrap items-center gap-1">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
