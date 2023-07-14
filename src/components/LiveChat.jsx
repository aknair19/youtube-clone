import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, []);
  const sendChatMessage = (e) => {
    e.preventDefault();
    if (chatMessage.length > 0) {
      dispatch(
        addMessage({
          name: "User",
          message: chatMessage,
        })
      );

      console.log(chatMessage);
      setChatMessage("");
    }
  };
  return (
    <div className="flex flex-col w-full md:w-1/4 p-2  gap-1">
      <div className="font-bold text-red-600">Live Chat</div>
      <div className=" w-full  p-2  border shadow-lg bg-slate-100 rounded-lg overflow-y-scroll  h-[200px] md:h-[410px]    flex flex-col-reverse border-black ">
        {chatMessages.map((c, index) => {
          return <ChatMessage key={index} name={c.name} message={c.message} />;
        })}
      </div>
      <form
        className="w-full flex justify-center gap-2"
        onSubmit={(e) => sendChatMessage(e)}
      >
        <input
          type="text"
          className="border w-full border-black rounded-md flex-1  outline-none placeholder:px-1 px-2 placeholder:text-sm"
          placeholder="Send a Message"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button className="bg-blue-300 p-1 px-2 w-[60px] rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
