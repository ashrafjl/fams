import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import {
  testimonialSliderSetting,
  testimonils,
  transitionY,
} from "../utils/Constants";
import Image from "next/image";
import Slider from "react-slick";

const Testimonial = () => {
  const testimonial = useRef(null);
  const slide = useRef(null);
  const isInView = useInView(testimonial, { once: false });
  const slideInView = useInView(slide, { once: false });

  return (
    <div className="mt-[120px] flex md:flex-row flex-col" ref={testimonial}>
      <motion.div
        className="flex-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={transitionY}
      >
        <div className="flex items-center gap-2">
          <span>
            <Image
              src={"/images/title_left.svg"}
              width={16}
              height={16}
              className="w-full"
              alt="about"
            />
          </span>
          <h4 className="text-[20px] text-primary font-semibold leading-[20px]">
            Client Testimonials
          </h4>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={transitionY}
          className="mt-[20px]"
        >
          <h4 className="text-primary sm:text-[60px] text-[40px] leading-[100%] font-semibold max-w-[550px]">
            Check Out What our{" "}
            <span className="text-secondary font-bold">clients say</span>
          </h4>
          <p className="mt-[15px] sm:text-lg text-sm text-text-color max-w-[500px]">
            At FAMS Events and Exhibitions, our clients satisfaction is our top
            priority. Hear directly from those who have experienced our
            exceptional service and innovative event solutions.
          </p>
          <div className="mt-[30px] flex gap-8 items-center">
            <div className="w-[55px] h-[55px] overflow-hidden flex items-center justify-center">
              <Image
                src={"/images/call.svg"}
                width={55}
                height={55}
                alt="phone"
              />
            </div>
            <div>
              <p className="text-lg font-medium text-text-color m-0">
                Need Help?
              </p>
              <a className="text-primary text-[22px] font-semibold">
                (319) 555-0115
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={slide}
        initial="hidden"
        animate={slideInView ? "visible" : "hidden"}
        variants={transitionY}
        className="flex-1 overflow-hidden p-5"
      >
        <Slider {...testimonialSliderSetting}>
          {testimonils.map((item) => (
            <div className="sm:p-4 p-1">
              <div
                className="bg-white p-8 rounded-[20px] border border-light-border shadow-card"
                key={item.id}
              >
                <div className="w-[55px] h-[55px] rounded-full bg-secondary mx-auto flex items-center justify-center">
                  <Image
                    src={"/images/quote2-1.svg"}
                    width={30}
                    height={30}
                    alt="quote"
                  />
                </div>
                <p className="text-lg text-text-color font-normal mt-[40px] text-center max-w-[320px] mx-auto">
                  {item.description}
                </p>
                <h4 className="text-[22px] text-primary font-medium mt-[30px] mb-5 text-center">
                  {item.name}
                </h4>
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center overflow-hidden mx-auto shadow-card mb-[-60px]">
                  <Image
                    src={item.image}
                    width={60}
                    height={60}
                    className="w-[55px] h-[55px] object-cover object-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
