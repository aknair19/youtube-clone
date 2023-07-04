import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatcPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(classMenu());
  }, []);
  return (
    <div className="p-1">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatcPage;
