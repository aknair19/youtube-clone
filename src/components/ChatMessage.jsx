import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  gap-2 width-full p-1 rounded-lg px-2  items-center ">
      <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        className="w-7 h-7  "
      />
      <div className="flex  flex-wrap items-center gap-1">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
