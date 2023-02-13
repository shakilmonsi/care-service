import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>

      <Footer></Footer>
      <h1>tis is a rtrrrrmain</h1>
    </div>
  );
};

export default Main;
