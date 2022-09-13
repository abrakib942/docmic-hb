import React from "react";
import NavMenu from "../../Shared/NavMenu";
import Banner from "./Banner";
import Experience from "./Experience";
import FaqQues from "./FaqQues";
import Feature from "./Feature";
import Services from "./Services";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <div>
      <NavMenu />
      <Banner />
      <Services />
      <Experience />
      <Feature />
      <FaqQues />
      <Testimonial />
    </div>
  );
};

export default HomePage;
