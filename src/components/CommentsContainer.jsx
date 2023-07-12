import React from "react";
import { USER_ICON_URL } from "../utils/constants";

const commentsData = [
  {
    id: 1,
    name: "Roy",
    text: "loremm what is this.",
    replies: [
      { id: 2, name: "Dwayne", text: "loremm what is this.", replies: [] },
      { id: 3, name: "Rock", text: "loremm what is this.", replies: [] },
      { id: 4, name: "Bruce", text: "loremm what is this.", replies: [] },
    ],
  },
  {
    id: 5,
    name: "Maxx",
    text: "loremm what is this.",
    replies: [
      { id: 6, name: "Kate", text: "loremm what is this.", replies: [] },
      {
        id: 7,
        name: "Sam",
        text: "loremm what is this.",
        replies: [
          { id: 8, name: "Dexter", text: "loremm what is this.", replies: [] },
          { id: 9, name: "Sheldon", text: "loremm what is this.", replies: [] },
          { id: 10, name: "Joe", text: "loremm what is this.", replies: [] },
        ],
      },
      { id: 11, name: "Chris", text: "loremm what is this.", replies: [] },
    ],
  },
  { id: 12, name: "Max", text: "loremm what is this.", replies: [] },
  { id: 13, name: "Evans", text: "loremm what is this.", replies: [] },
  {
    id: 14,
    name: "Sojin",
    text: "loremm what is this.",
    replies: [
      { id: 15, name: "Brad", text: "loremm what is this.", replies: [] },
      { id: 16, name: "Leonardo", text: "loremm what is this.", replies: [] },
      { id: 17, name: "Lorem", text: "loremm what is this.", replies: [] },
    ],
  },
];
export const Comment = ({ data }) => {
  const { text, name, replies } = data;
  return (
    <div className="px-1 flex  bg-gray-200 rounded-lg items-center gap-2">
      <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
        className="w-7 h-7  "
      />
      <div>
        <p className="font-semibold ">{name}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="flex flex-col gap-y-2 ">
      <div>
        <Comment data={comment} key={comment?.id} />
      </div>

      <div className="pl-5  ml-3 flex flex-col  border-l border-l-black">
        <CommentList comments={comment.replies} key={comment?.id} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="w-full md:w-4/5 flex flex-col gap-3 ">
      <h1 className="text-lg font-semibold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
