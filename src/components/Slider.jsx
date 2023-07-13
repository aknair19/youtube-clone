import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles

import "swiper/css/bundle";
import Button from "./Button";
const Slider = ({ list }) => {
  return (
    <div className="flex   border">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={"auto"}
        navigation
        className=""
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {list.map((l, i) => {
          return (
            <SwiperSlide key={i} className="border border-red-200 ">
              <Button name={l.name} />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </div>
  );
};

export default Slider;
