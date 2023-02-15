import React, { useEffect, useState } from "react";
import SweviceCart from "../servic/SweviceCart";

const Service = () => {
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setservices(data));
  }, []);
  return (
    <div className=" text-center mb-4">
      <h1 className="text-2xl font-bold text-orange-600 ">service</h1>
      <h1 className="text-5xl font-semibold ">Our Service Area</h1>
      <p>
        the majority have suffered alteration in some form , by infected humour
      </p>
      <h3>sshshs:{services.length}</h3>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <SweviceCart key={service.id} service={service}></SweviceCart>
        ))}
      </div>
    </div>
  );
};

export default Service;
