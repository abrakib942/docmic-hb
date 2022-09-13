import React from "react";
import exp from "../../assets/exp.png";

const Experience = () => {
  return (
    <div className="container mx-auto lg:px-24 px-10 my-12 mt-16">
      <p className="text-lg font-semibold text-[#642DFF]">
        16+ Years Experiences{" "}
      </p>

      <div className="grid lg:grid-cols-2  justify-items-end">
        <div className="mb-4">
          <h2 className="text-3xl font-semibold my-3">
            We Are Always ensure Best Medical Treatment For Your Health
          </h2>
          <p className="text-[#575757]">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look lik
          </p>
        </div>
        <div className="lg:mr-12">
          <img src={exp} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
