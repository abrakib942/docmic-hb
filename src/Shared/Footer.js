import React from "react";
import facebook from "../../src/assets/facebook.png";
import instagram from "../../src/assets/instagram.png";
import google from "../../src/assets/google.png";
import twitter from "../../src/assets/twitter.png";
import youtube from "../../src/assets/youtube.png";

const Footer = () => {
  return (
    <div className="lg:px-[92px] px-8 bg-[#E9EEF7] py-10 mt-16">
      <div className=" grid lg:grid-cols-11 gap-5">
        <div className="col-span-4 lg:mr-12">
          <h3 className="text-start text-[#2D89FF] font-bold  text-[18px]">
            {" "}
            Doc
            <span className="text-[#642DFF]">mic.</span>{" "}
          </h3>
          <p className=" text-[#575757] leading-9">
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has bee
          </p>
        </div>
        <div className="col-span-3">
          <div className=" text-start">
            <h3 className="text-[#642DFF] font-medium">Quick Links</h3>
          </div>
          <div className="flex justify-between text-start ">
            <div className=" leading-9">
              <p>About Us</p>
              <p>Our Pricing</p>
              <p>Our Gallery</p>
              <p>Appointment</p>
              <p>Privacy Policy</p>
            </div>
            <div className="lg:ml-16 ml-8 leading-9">
              <p>Services</p>
              <p>Our Doctors</p>
              <p>Our Latest News</p>
              <p>Careers</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:ml-16 mb-8">
          <div className=" text-start">
            <h3 className="text-[#642DFF] font-medium">Opening Hours</h3>
          </div>
          <div className="flex text-start  gap-5">
            <div className=" text-[#2D89FF] leading-9">
              <p>Mon- Tue</p>
              <p>Wed- Thu</p>
              <p>Fri- Sat</p>
              <p>Sunday</p>
              <p>Personal</p>
            </div>
            <div className="text-[#575757] leading-9">
              <p>08:00 AM- 05:00 PM</p>
              <p>09:00 AM- 06:00 PM</p>
              <p>10:00 AM- 07:00 PM</p>
              <p>Emergency Only</p>
              <p>Mon- 05:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={google} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>

      <p className="text-start mt-2 text-[#575757]">
        Copyright @222 Medicom All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
