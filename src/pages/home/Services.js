import { Button, Card } from "@material-tailwind/react";
import React from "react";
import cardio from "../../assets/cardio.png";
import check from "../../assets/check.png";
import dental from "../../assets/dental.png";
import opthal from "../../assets/opthal.png";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Cardiology",
      text: "Seduahag perspiciati under omnised atused error.",
      btn: "Explore Now",
      icon: cardio,
    },
    {
      id: 2,
      name: "Monthly Check Up",
      text: "Seduahag perspiciati under omnised atused error.",
      btn: "Explore Now",
      icon: check,
    },
    {
      id: 3,
      name: "Dental Care",
      text: "Seduahag perspiciati under omnised atused error.",
      btn: "Explore Now",
      icon: dental,
    },
    {
      id: 4,
      name: "Opthalmology",
      text: "Seduahag perspiciati under omnised atused error.",
      btn: "Explore Now",
      icon: opthal,
    },
  ];

  return (
    <div className="container mx-auto lg:px-24">
      <div className="text-center">
        <h5 className="text-[#642DFF] text-xl font-semibold mb-2">
          Our Services
        </h5>
        <h2 className="text-[#1E1E1E] text-3xl font-semibold">
          Services For Your Health
        </h2>
      </div>

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-4 justify-items-center my-6">
        {services.map((service) => (
          <div className="bg-white  w-[250px] px-3 py-5 rounded-lg hover:border-2 hover:text-[#2D89FF] border-[#2D89FF]">
            <div className="flex justify-between items-center">
              <p className="text-[#1E1E1E]">{service.name}</p>
              <img src={service.icon} alt="" />
            </div>
            <p className="text-[#575757] my-3">{service.text}</p>
            <button className=" normal-case font-semibold active:text-[#2D89FF] ">
              {service.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
