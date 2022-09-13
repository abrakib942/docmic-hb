import React from "react";
import slide1 from "../../assets/slide1.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "David Jeams",
      title: "Patient",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content",
      img: slide1,
    },
    {
      name: "David Jeams",
      title: "Patient",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content",
      img: slide1,
    },
    {
      name: "David Jeams",
      title: "Patient",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content",
      img: slide1,
    },
  ];

  return (
    <div className="mb-12">
      <div className="text-center mt-12 mb-8">
        <p className="text-[#642DFF]">Testimonial</p>
        <h3 className="text-3xl font-semibold">What they say?</h3>
      </div>

      <div className="md:px-12 lg:px-52">
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {testimonials?.map((testimonial) => (
              <SwiperSlide className="">
                <div>
                  <div className=" lg:flex items-center md:px-8  lg:mx-20 border  bg-white shadow-2xl text-justify ">
                    <div className="px-10 lg:px-4 lg:mb-10 z-20">
                      <h2 className="text-lg font-bold">{testimonial.name}</h2>
                      <p className="font-semibold text-sm mb-2">
                        {testimonial.title}
                      </p>
                      <p className="">{testimonial.description}</p>
                    </div>
                    <div className="w-full flex justify-center lg:z-20">
                      <img src={testimonial.img} alt="" />
                    </div>
                  </div>
                  <div className="absolute lg:top-0 lg:right-24 top-96 right-8">
                    <img src={bg1} alt="" />
                  </div>
                  <div className="absolute lg:bottom-0 lg:left-24 bottom-0 left-10 ">
                    <img className="" src={bg2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Testimonial;
