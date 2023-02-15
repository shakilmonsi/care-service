import React from "react";

const SweviceCart = ({ service }) => {
  const { img, price, title } = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}!</h2>
        <p className="text-2xl text-orange-700 font-semibold ">
          price:${price}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SweviceCart;
