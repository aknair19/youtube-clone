import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-3 p-2 bg-gray-200 rounded-xl font-semibold text-sm hover:bg-gray-300">
      {" "}
      {name}
    </button>
  );
};

export default Button;
