import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { classMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  useEffect(() => {
    dispatch(classMenu());
  }, []);
  return (
    <div className=" flex  flex-col md:flex-row  w-screen border justify-center md:items-start ">
      <div className="  w-full  md:w-3/4 md:p-4">
        <iframe
          className="w-full h-[30rem] "
          src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" border  border-green-400  w-full md:w-1/4 md:p-2">
        <p>COMMENTS</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
        maxime soluta excepturi quam quia aliquam vel autem rem numquam
        praesentium blanditiis, eum quae deserunt porro dolore quasi voluptate,
        sit voluptatum laboriosam iure. Enim nostrum beatae sint sapiente
        laudantium inventore consectetur fugit? Fugit, aliquid! Ea ducimus rerum
        nemo, omnis adipisci totam modi hic ullam, consequuntur, fugiat odio
        dicta explicabo sint atque delectus enim soluta quis qui eaque quam! Hic
        natus aliquid alias eligendi adipisci saepe id repellendus culpa magnam!
        Omnis fuga beatae molestias atque iusto quas doloremque obcaecati
        explicabo! Cum iste odio hic quasi consequuntur perspiciatis possimus
        pariatur ipsum sequi!
      </div>
    </div>
  );
};

export default WatchPage;
