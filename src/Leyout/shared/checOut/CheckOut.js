import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { title, img } = useLoaderData();
  console.log(
    title,
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,vvvvvvv"
  );
  return (
    <div>
      <h1>shakil checkOut {title}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default CheckOut;
