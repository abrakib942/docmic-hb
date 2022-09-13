import { Button } from "@material-tailwind/react";
import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  const summaries = [
    {
      id: 1,
      number: 262,
      action: "k+",
      text: "Recovered Patients",
    },
    {
      id: 2,
      number: 96,
      action: "%",
      text: "Satisfaction Rate",
    },
    {
      id: 3,
      number: 86,
      action: "+",
      text: "Expert Doctors",
    },
  ];

  return (
    <div className="container mx-auto grid lg:grid-cols-2 justify-items-center px-8">
      <div className="lg:mt-16 mt-8 lg:ml-24 ">
        <h1 className="text-6xl  font-medium">
          Your <span className="text-[#2D89FF]">Health</span> Is Our Top
          <span className="text-[#642DFF]"> Priority</span>
        </h1>
        <p className="my-6">
          There are many variations of passages of lpsum available, but the
          majority hae suffered.
        </p>
        <Button
          variant="gradient"
          size="lg"
          className="bg-[#2D89FF] normal-case"
        >
          Meet Our Specialist
        </Button>

        <div className="my-14 grid grid-cols-3  justify-items-center">
          {summaries.map((summary) => (
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-[#642DFF]">
                {summary.number}
                {summary.action}
              </h3>
              <p className="text-[#575757] font-semibold">{summary.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[-24px] lg:mr-16">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
