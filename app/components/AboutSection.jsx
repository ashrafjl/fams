import Image from "next/image";
import React, { useRef } from "react";
import CheckBadge from "../icons/CheckBadge";
import ButtonDark from "./ButtonDark";
import ArrowRight from "../icons/ArrowRight";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleClick = () => {};
  return (
    <div
      className="flex md:flex-row flex-col items-center mt-[100px] gap-[60px]"
      ref={ref}
    >
      <motion.div
        className="flex-1"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={leftVariants}
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
            About Us
          </h4>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="mt-[20px]"
        >
          <h4 className="text-primary sm:text-[60px] text-[40px] leading-[110%] font-semibold">
            Welcome To{" "}
            <span className="text-secondary font-bold">
              FAMS Events & Exhibition
            </span>
          </h4>
          <p className="m-0 mt-[20px] text-lg leading-[160%] text-text-color font-medium">
            We provide all services to exhibitions stand Design and building
            around the world in all types of Events & Exhibitions.
          </p>

          <div className="mt-[30px] flex items-center gap-2">
            <span>
              <CheckBadge classes={"size-5 text-primary"} />
            </span>
            <p className="m-0 text-[16px] leading-[140%] text-text-color font-medium">
              Transform your vision into reality with our exceptional exhibition
              desing services.
            </p>
          </div>
          <div className="mt-[20px] flex items-center gap-2">
            <span>
              <CheckBadge classes={"size-5 text-primary"} />
            </span>
            <p className="m-0 text-[16px] leading-[140%] text-text-color font-medium">
              We offer a wide range of services to meet the unique needs of each
              of our clients
            </p>
          </div>
          <div className="mt-[20px] flex items-center gap-2">
            <span>
              <CheckBadge classes={"size-5 text-primary"} />
            </span>
            <p className="m-0 text-[16px] leading-[140%] text-text-color font-medium">
              We specialize in creating unique and eye-cathching exhibition
              stands for clients looking to make a big impact at expos and
              events.
            </p>
          </div>
          <div className="mt-[20px] flex items-center gap-2">
            <span>
              <CheckBadge classes={"size-5 text-primary"} />
            </span>
            <p className="m-0 text-[16px] leading-[140%] text-text-color font-medium">
              We are proud to serve a diverse range of customers from a variety
              of industries
            </p>
          </div>
          <div className="mt-[40px]">
            <ButtonDark
              text={"Explore more"}
              onClick={handleClick}
              isIcon={true}
              icon={<ArrowRight classes={"size-5"} />}
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="flex-1 flex sm:flex-row flex-col gap-4 items-center">
        <div className="flex-1">
          <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="w-full bg-primary p-[30px] max-w-[270px] rounded-[10px]">
            <div
              className="flex items-center gap-5"
            >
              <span className="bg-white w-[64px] h-[64px] flex items-center justify-center rounded-[8px]">
                <Image
                  src={"/images/about_icon.svg"}
                  width={50}
                  height={50}
                  alt="about icon"
                />
              </span>
              <div>
                <h3 className="text-[30px] font-semibold text-white leading-[30px]">
                  6K+
                </h3>
                <h4 className="text-[22px] font-semibold text-white leading-[22px]">
                  Clients
                </h4>
              </div>
            </div>
            <p className="mt-2 text-white text-sm font-medium">
              6k+ Clients are enjoying our services
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={leftVariants}
            className="mt-[30px]"
          >
            <Image
              src={"/images/about_img_2.png"}
              width={270}
              height={450}
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={leftVariants}
          className="flex-1"
        >
          <Image
            src={"/images/about_img_1.jpg"}
            width={270}
            height={450}
            alt="about 2"
            className="rounded-[10px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
