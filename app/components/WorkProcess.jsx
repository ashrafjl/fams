import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { itemVariants, transitionY } from "../utils/Constants";

const process = [
  {
    id: 1,
    title: "Make a Plan",
    description:
      "We collaborate closely with you to develop a comprehensive event strategy tailored to your goals and vision.",
    image: "/images/01.svg",
  },
  {
    id: 2,
    title: "Cost Calculating",
    description:
      "We provide transparent, detailed cost estimates to ensure your budget aligns with your event aspirations without compromising quality.",
    image: "/images/02.svg",
  },
  {
    id: 3,
    title: "Business Growth",
    description:
      "Our events are designed to enhance brand visibility, foster connections, and drive measurable growth for your business.",
    image: "/images/03.svg",
  },
  {
    id: 4,
    title: "Success Mission",
    description: `We focus on delivering outstanding results, ensuring every event is not just a gathering but a catalyst for success.`,
    image: "/images/04.svg",
  },
];

const WorkProcess = () => {
  const ref = React.useRef(null);
  const titleRef = React.useRef(null);
  const inView = useInView(ref, { once: false });
  const titleView = useInView(titleRef, { once: false });

  return (
    <>
      <motion.div
          ref={titleRef}
          className="pt-4"
          initial="hidden"
          animate={titleView ? "visible" : "hidden"}
          variants={transitionY}
        >
          <div className="flex items-center justify-center gap-2">
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
                Working Steps
            </h4>
          </div>
          <motion.div
            initial="hidden"
            animate={titleView ? "visible" : "hidden"}
            variants={transitionY}
            className="mt-[20px]"
          >
            <h4 className="text-primary sm:text-[60px] text-[40px] leading-[100%] font-semibold text-center">
            Our Basic Work Process
            </h4>
          </motion.div>
        </motion.div>
      <div
        className="flex items-center sm:justify-between gap-4 justify-center flex-wrap mt-20"
        ref={ref}
      >
        {process.map((pro, index) => (
          <motion.div
            key={pro.id}
            className="max-w-[200px] relative group"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={index}
            variants={itemVariants}
          >
            <div className="w-[40px] h-[40px] bg-primary flex items-center justify-center rounded-full absolute right-[22px] scale-0 transition-transform transform group-hover:scale-100">
              <span className="text-white text-sm">{index + 1}</span>
            </div>
            <div className="w-[192px] h-[192px] rounded-full border border-dashed border-primary p-6">
              <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                <Image width={40} height={40} alt="" src={pro.image} />
              </div>
            </div>
            <h5 className="text-primary text-[22px] font-semibold text-center mt-6">
              {pro.title}
            </h5>
            <p className="text-sm text-text-color leading-[120%] text-center">
              {pro.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WorkProcess;
