import React from "react";
import ing1 from "../../../../assets/images/banner/1.jpg";
import ing2 from "../../../../assets/images/banner/2.jpg";
import ing3 from "../../../../assets/images/banner/3.jpg";
import ing4 from "../../../../assets/images/banner/4.jpg";
import ing5 from "../../../../assets/images/banner/5.jpg";
import ing6 from "../../../../assets/images/banner/4.jpg";
const Benner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={ing1} alt="" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
          <h1 className="text-5xl font-bold text-white">
            Affordable <br /> Price For Carbr <br /> Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/2">
          <p className="fond-bold text-white text-xl">
            There are many variations of passages of available,
            <br /> but the majority have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-3/4">
          <button className="btn btn-warning mr-5">Warning</button>
          <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={ing2} alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={ing3} alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={ing4} alt="" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Benner;
