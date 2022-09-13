import React from "react";
import NavMenu from "../../Shared/NavMenu";
import Banner from "./Banner";
import Experience from "./Experience";
import Feature from "./Feature";
import Services from "./Services";

const HomePage = () => {
  return (
    <div>
      <NavMenu />
      <Banner />
      <Services />
      <Experience />
      <Feature />
    </div>
  );
};

export default HomePage;
