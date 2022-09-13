import React from "react";
import faq from "../../assets/faq.png";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const FaqQues = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="container mx-auto px-10 lg:px-24 mt-20">
      <div className="grid lg:grid-cols-2 justify-items-center">
        <div>
          <p className="text-[#642DFF]">FAQ Questions</p>
          <h2 className="text-3xl font-semibold my-3">
            Get Your General Answer{" "}
          </h2>
          <Fragment>
            <Accordion open={open === 1} animate={customAnimation}>
              <AccordionHeader
                className="text-base"
                onClick={() => handleOpen(1)}
              >
                Get Your General Answer
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={customAnimation}>
              <AccordionHeader
                className="text-base"
                onClick={() => handleOpen(2)}
              >
                Will I always see my own doctor?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={customAnimation}>
              <AccordionHeader
                className="text-base"
                onClick={() => handleOpen(3)}
              >
                What is one Medical’s care?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} animate={customAnimation}>
              <AccordionHeader
                className="text-base"
                onClick={() => handleOpen(4)}
              >
                What is evidence based medicine?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} animate={customAnimation}>
              <AccordionHeader
                className="text-base"
                onClick={() => handleOpen(5)}
              >
                What is an academic medical center?
              </AccordionHeader>
              <AccordionBody>
                We&apos;re not always in the position that we want to be at.
              </AccordionBody>
            </Accordion>
          </Fragment>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
          className="lg:mt-[-70px]"
        >
          <img src={faq} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FaqQues;
