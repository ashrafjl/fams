import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { transitionY } from "../utils/Constants";
import Image from "next/image";
import Play from "../icons/Play";
import Modal from "./Modal";

const chooseData = [
  {
    id: 1,
    title: "Expertise Across Industries:",
    description:
      "Our diverse experience spans multiple sectors, allowing us to tailor events that resonate with varied audiences and objectives.",
    image: "/images/choose1.png",
  },
  {
    id: 2,
    title: "Proven Track Record:",
    description:
      "We have successfully executed numerous events, earning accolades and client trust through consistent delivery of outstanding experiences.",
    image: "/images/choose2.png",
  },
  {
    id: 1,
    title: "Commitment to Excellence:",
    description:
      "Our dedication to quality ensures every detail is meticulously managed, resulting in seamless, memorable events that exceed expectations.",
    image: "/images/choose3.png",
  },
];

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [openVideo, setOpenVideo] = useState(false);
  const handleClick = () => {
    setOpenVideo(true);
  };
  const closeModal = () => {
    setOpenVideo(false);
  };
  return (
    <>
      <div
        className="flex md:flex-row flex-col mt-[100px] gap-[60px]"
        ref={ref}
      >
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
              Why Choose Us
            </h4>
          </div>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={transitionY}
            className="mt-[20px]"
          >
            <h4 className="text-primary sm:text-[60px] text-[40px] leading-[110%] font-semibold max-w-[600px]">
              Why choose{" "}
              <span className="text-secondary">FAMS Events & Exhibition</span>
            </h4>
            <p className="max-w-[600px] text-lg leading-[140%] text-text-color mt-[15px]">
              Our tailored approach ensures that every event is a unique success
              story, crafted with precision and passion. Choose us for an
              unforgettable experience that captivates your audience and
              elevates your brand.
            </p>
          </motion.div>
          <div>
            {chooseData?.map((data) => (
              <div className="flex items-center gap-5 mt-[15px]" key={data?.id}>
                <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center overflow-hidden shadow-icon border border-light-border">
                  <Image
                    src={data?.image}
                    width={40}
                    height={40}
                    alt=""
                    className="w-[40px] h-[40px] object-contain object-center"
                  />
                </div>
                <div>
                  <h4 className="text-[25px] font-semibold text-primary mb-2">
                    {data?.title}
                  </h4>
                  <p className="max-w-[380px] text-sm leading-[130%] text-text-color">
                    {data?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={transitionY}
        >
          <div className="flex sm:flex-row flex-col items-center gap-4">
            <div>
              <div className="w-[170px] h-[170px] bg-primary rounded-full p-10">
                <h3 className="text-[30px] text-white text-center font-semibold">
                  25+
                </h3>
                <p className="text-lg text-white text-center leading-[100%]">
                  Years of experience
                </p>
              </div>
              <div className="mt-[20px]">
                <Image
                  src={"/images/choose-side.png"}
                  width={170}
                  height={214}
                  className=""
                />
              </div>
            </div>
            <div>
              <Image
                src={"/images/choose.png"}
                width={460}
                height={400}
                className=""
              />
            </div>
          </div>
          <div className="mt-[20px] bg-red-800 rounded-[20px] w-full h-[171px] overflow-hidden relative ">
            <Image
              src={"/images/choose-footer.png"}
              width={645}
              height={171}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute left-0 top-0 bg-primary bg-opacity-80 z-10 w-full h-full"></div>
            <div
              className="absolute max-w-[300px] h-[50px] leading-[50px] flex items-center justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 w-full min-w-[220px] border border-[rgba(255, 255, 255, 0.45)] bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-[7.5px] rounded-[100px] gap-3 cursor-pointer"
              onClick={handleClick}
            >
              <Play classVal={"size-5 text-white"} />
              <span className="text-white">See How it works</span>
            </div>
          </div>
        </motion.div>
      </div>
      {openVideo && <Modal closeModal={closeModal} />}
    </>
  );
};

export default WhyChoose;
