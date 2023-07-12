import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [input, setInput] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(input), [input]);

  return (
    <div
      className={
        "w-96 h-96 border border-green-800 m-auto " +
        (darkTheme && "bg-gray-900 text-white")
      }
    >
      <button
        className="border p-1 px-2 m-2"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        Theme
      </button>
      <div className=" p-1">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border  border-black w-3/6 "
        />
        <button className="border bg-gray-300 p-1 px-2">Find</button>
        <h1 className="font-bold text-xl">The nth prime number is : {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
