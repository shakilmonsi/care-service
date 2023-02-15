import React from "react";
import About from "../../../../Leyout/shared/About/About";
import Service from "../../../../Leyout/shared/Service/Service";
import Benner from "../Banner/Benner";

const Home = () => {
  return (
    <div>
      <Benner></Benner>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
