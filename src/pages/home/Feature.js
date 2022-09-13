import React from "react";
import feature from "../../assets/feature.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const Feature = () => {
  const features = [
    {
      id: 1,
      name: "24 Hours Doctor Support",
      text: "simply dummy text of the printing and typesetting industry. ",

      icon: icon1,
    },

    {
      id: 2,
      name: "Exclusive Supports",
      text: "simply dummy text of the printing and typesetting industry. ",

      icon: icon2,
    },
    {
      id: 3,
      name: "Friendly Environment ",
      text: "simply dummy text of the printing and typesetting industry. ",

      icon: icon3,
    },
    {
      id: 4,
      name: "24 Hours Nurse Support",
      text: "simply dummy text of the printing and typesetting industry. ",

      icon: icon4,
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-8 my-8">
        <div className="grid lg:grid-cols-2 justify-items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mb-4"
          >
            <img src={feature} alt="" />
          </div>
          <div className="lg:px-12">
            <p className="text-[#642DFF]">Our Hospital Feature</p>
            <h3
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="text-3xl font-semibold"
            >
              Make An Appointment Easy And Fast Services{" "}
            </h3>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className=" grid lg:grid-cols-2 md:grid-cols-2 gap-5 justify-items-center mt-2"
            >
              {features.map((feature) => (
                <div className="bg-white  lg:w-[260px] p-2 rounded-lg ">
                  <div className="flex justify-between items-center">
                    <p className="text-[#1E1E1E] font-semibold">
                      {feature.name}
                    </p>
                    <img src={feature.icon} alt="" />
                  </div>
                  <p className="text-[#575757] my-3">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
