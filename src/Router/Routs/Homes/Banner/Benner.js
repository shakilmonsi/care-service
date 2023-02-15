import React from "react";
import ing1 from "../../../../assets/images/banner/1.jpg";
import ing2 from "../../../../assets/images/banner/2.jpg";
import ing3 from "../../../../assets/images/banner/3.jpg";
import ing4 from "../../../../assets/images/banner/4.jpg";
import ing5 from "../../../../assets/images/banner/5.jpg";
import ing6 from "../../../../assets/images/banner/4.jpg";

import BannerItem from "./BannerItem";
const Benner = () => {
  const bannerData = [
    {
      image: ing1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: ing2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: ing3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: ing4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: ing5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: ing6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full py-10">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide}></BannerItem>
      ))}
    </div>
  );
};

export default Benner;
