import React from "react";
import { USER_ICON_URL } from "../constants";

const commentsData = [
  {
    name: "Rahul",
    text: "loremm what is this.",
    replies: [
      {
        name: "aman",
        text: "loremm what is this.",
        replies: [],
      },
      {
        name: "suresh",
        text: "loremm what is this.",
        replies: [],
      },
      {
        name: "lokesh",
        text: "loremm what is this.",
        replies: [],
      },
    ],
  },
  {
    name: "Aksash",
    text: "loremm what is this.",
    replies: [
      {
        name: "aman",
        text: "loremm what is this.",
        replies: [],
      },
      {
        name: "suresh",
        text: "loremm what is this.",
        replies: [
          {
            name: "aman",
            text: "loremm what is this.",
            replies: [],
          },
          {
            name: "suresh",
            text: "loremm what is this.",
            replies: [],
          },
          {
            name: "lokesh",
            text: "loremm what is this.",
            replies: [],
          },
        ],
      },
      {
        name: "lokesh",
        text: "loremm what is this.",
        replies: [],
      },
    ],
  },
  {
    name: "Suraj",
    text: "loremm what is this.",
    replies: [],
  },
  {
    name: "Gokul",
    text: "loremm what is this.",
    replies: [],
  },
  {
    name: "Sojin",
    text: "loremm what is this.",
    replies: [
      {
        name: "aman",
        text: "loremm what is this.",
        replies: [],
      },
      {
        name: "suresh",
        text: "loremm what is this.",
        replies: [
          {
            name: "aman",
            text: "loremm what is this.",
            replies: [],
          },
          {
            name: "suresh",
            text: "loremm what is this.",
            replies: [],
          },
          {
            name: "lokesh",
            text: "loremm what is this.",
            replies: [],
          },
        ],
      },
      {
        name: "lokesh",
        text: "loremm what is this.",
        replies: [],
      },
    ],
  },
];
export const Comment = ({ data }) => {
  const { text, name, replies } = data;
  return (
    <div className="px-1 flex border bg-gray-200 rounded-lg">
      <img alt="user" src={USER_ICON_URL} className="w-10 h-10 " />
      <div>
        <p className="font-semibold ">{name}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
};

export const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment data={comment} key={index} />

      <div className="pl-5  ml-3 flex flex-col gap-1 border border-l-black">
        <CommentList comments={comment.replies} key={index} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div >
      <h1 className="text-lg font-semibold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
