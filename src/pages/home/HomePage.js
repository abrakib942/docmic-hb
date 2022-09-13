import React from "react";
import Footer from "../../Shared/Footer";
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
      <Footer />
    </div>
  );
};

export default HomePage;
